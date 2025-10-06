#!/bin/bash

# Script para configurar SSL con Let's Encrypt
# Uso: ./setup-ssl.sh tu-email@ejemplo.com

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para imprimir mensajes
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_info() {
    echo -e "${BLUE}[SSL]${NC} $1"
}

# Verificar que se proporcione el email
if [ -z "$1" ]; then
    print_error "Debes proporcionar tu email como parámetro"
    echo "Uso: ./setup-ssl.sh tu-email@ejemplo.com"
    exit 1
fi

EMAIL=$1
DOMAIN="andinochain.xyz"

print_info "🔒 Configurando SSL para $DOMAIN con email: $EMAIL"

# Crear directorios necesarios
print_status "Creando directorios para certificados..."
mkdir -p certbot/conf
mkdir -p certbot/www

# Actualizar docker-compose.yml con el email real
print_status "Actualizando configuración con tu email..."
sed -i "s/tu-email@ejemplo.com/$EMAIL/g" docker-compose.yml

# Verificar que el DNS esté configurado
print_warning "⏳ Verificando configuración DNS..."
if ! nslookup $DOMAIN | grep -q "89.116.51.183"; then
    print_warning "⚠️  DNS aún no está propagado o no está configurado correctamente"
    print_warning "   Configura estos registros DNS en Hostinger:"
    print_warning "   Tipo: A, Nombre: @, Valor: 89.116.51.183"
    print_warning "   Tipo: A, Nombre: www, Valor: 89.116.51.183"
    print_warning "   Espera 5-15 minutos y ejecuta este script nuevamente"
    exit 1
fi

print_status "✅ DNS configurado correctamente"

# Detener contenedores existentes
print_status "Deteniendo contenedores existentes..."
docker compose down

# Iniciar solo el servidor web (sin SSL aún)
print_status "Iniciando servidor web..."
docker compose up -d andinochain-web

# Esperar a que el servidor esté listo
print_status "Esperando a que el servidor esté listo..."
sleep 10

# Verificar que el servidor responda
if ! curl -s http://$DOMAIN > /dev/null; then
    print_error "❌ El servidor no responde en http://$DOMAIN"
    print_error "   Verifica que el DNS esté configurado correctamente"
    exit 1
fi

print_status "✅ Servidor web funcionando correctamente"

# Obtener certificados SSL
print_info "🔐 Obteniendo certificados SSL de Let's Encrypt..."
docker compose run --rm certbot

# Verificar que los certificados se hayan creado
if [ ! -f "certbot/conf/live/$DOMAIN/fullchain.pem" ]; then
    print_error "❌ Error al obtener certificados SSL"
    print_error "   Verifica que el dominio esté configurado correctamente"
    exit 1
fi

print_status "✅ Certificados SSL obtenidos exitosamente"

# Reiniciar el servidor web con SSL
print_status "Reiniciando servidor con SSL habilitado..."
docker compose down
docker compose up -d

# Esperar a que el servidor esté listo
sleep 10

# Verificar HTTPS
print_info "🔍 Verificando HTTPS..."
if curl -s https://$DOMAIN > /dev/null; then
    print_status "✅ HTTPS funcionando correctamente!"
    
    echo ""
    print_info "🎉 ¡SSL configurado exitosamente!"
    print_info "🌐 Tu sitio está disponible en:"
    print_info "   - https://$DOMAIN"
    print_info "   - https://www.$DOMAIN"
    print_info "   - http://$DOMAIN (redirige a HTTPS)"
    
    echo ""
    print_info "📋 Información del certificado:"
    docker compose exec andinochain-web openssl x509 -in /etc/letsencrypt/live/$DOMAIN/fullchain.pem -text -noout | grep -E "(Subject:|Not After:|DNS:)"
    
else
    print_error "❌ Error al verificar HTTPS"
    print_error "   Revisa los logs: docker compose logs"
    exit 1
fi

# Configurar renovación automática
print_status "Configurando renovación automática de certificados..."

# Crear script de renovación
cat > renew-ssl.sh << 'EOF'
#!/bin/bash
echo "🔄 Renovando certificados SSL..."
docker compose run --rm certbot renew
docker compose restart andinochain-web
echo "✅ Renovación completada"
EOF

chmod +x renew-ssl.sh

# Agregar cron job para renovación automática
print_status "Configurando cron job para renovación automática..."
(crontab -l 2>/dev/null; echo "0 3 * * 0 cd $(pwd) && ./renew-ssl.sh >> logs/ssl-renewal.log 2>&1") | crontab -

print_status "✅ Renovación automática configurada (cada domingo a las 3 AM)"

echo ""
print_info "🔒 ¡Configuración SSL completada!"
print_info "📊 Para ver logs: docker compose logs -f"
print_info "🔄 Para renovar manualmente: ./renew-ssl.sh"
print_info "🛑 Para detener: docker compose down"


