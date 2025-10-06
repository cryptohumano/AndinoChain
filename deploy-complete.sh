#!/bin/bash

# Script maestro de deployment completo para AndinoChain
# Uso: ./deploy-complete.sh tu-email@ejemplo.com

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
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
    echo -e "${BLUE}[DEPLOY]${NC} $1"
}

print_ssl() {
    echo -e "${PURPLE}[SSL]${NC} $1"
}

# Verificar que se proporcione el email
if [ -z "$1" ]; then
    print_error "Debes proporcionar tu email como parámetro"
    echo "Uso: ./deploy-complete.sh tu-email@ejemplo.com"
    exit 1
fi

EMAIL=$1
DOMAIN="andinochain.xyz"
EXPECTED_IP="89.116.51.183"

print_info "🚀 Iniciando deployment completo de AndinoChain"
print_info "📧 Email: $EMAIL"
print_info "🌐 Dominio: $DOMAIN"
print_info "🖥️  IP esperada: $EXPECTED_IP"

echo ""
print_info "═══════════════════════════════════════════════════════════════"
print_info "                    FASE 1: DEPLOYMENT BÁSICO"
print_info "═══════════════════════════════════════════════════════════════"

# Verificar que Docker esté instalado
if ! command -v docker &> /dev/null; then
    print_error "Docker no está instalado. Por favor instala Docker primero."
    exit 1
fi

# Verificar que Docker Compose esté instalado
if ! docker compose version &> /dev/null; then
    print_error "Docker Compose no está instalado. Por favor instala Docker Compose primero."
    exit 1
fi

# Crear directorios necesarios
print_status "Creando directorios necesarios..."
mkdir -p logs
mkdir -p certbot/conf
mkdir -p certbot/www

# Actualizar configuración con el email
print_status "Actualizando configuración con tu email..."
sed -i "s/tu-email@ejemplo.com/$EMAIL/g" docker-compose.yml

# Construir imagen
print_status "Construyendo imagen Docker..."
docker compose build --no-cache

# Detener contenedores existentes
print_status "Deteniendo contenedores existentes..."
docker compose down

# Iniciar servidor web
print_status "Iniciando servidor web..."
docker compose up -d andinochain-web

# Esperar a que el servidor esté listo
print_status "Esperando a que el servidor esté listo..."
sleep 10

# Verificar que el servidor esté funcionando
if docker compose ps | grep -q "Up"; then
    print_status "✅ Servidor web funcionando correctamente"
else
    print_error "❌ Error al iniciar el servidor web"
    print_error "Revisa los logs: docker compose logs"
    exit 1
fi

echo ""
print_info "═══════════════════════════════════════════════════════════════"
print_info "                    FASE 2: VERIFICACIÓN DNS"
print_info "═══════════════════════════════════════════════════════════════"

print_ssl "🔍 Verificando configuración DNS..."

# Función para verificar DNS
check_dns() {
    local ips=$(nslookup $DOMAIN | grep "Address:" | grep -v "127.0.0.53" | awk '{print $2}')
    echo "IPs encontradas: $ips"
    
    if echo "$ips" | grep -q "$EXPECTED_IP" && ! echo "$ips" | grep -q "84.32.84.32"; then
        return 0  # DNS correcto
    else
        return 1  # DNS aún propagándose
    fi
}

# Verificar DNS con timeout
DNS_TIMEOUT=1800  # 30 minutos
DNS_CHECK_INTERVAL=60  # 1 minuto
elapsed_time=0

while [ $elapsed_time -lt $DNS_TIMEOUT ]; do
    if check_dns; then
        print_status "✅ DNS propagado correctamente!"
        print_status "🌐 El dominio $DOMAIN ahora apunta solo a $EXPECTED_IP"
        break
    else
        print_warning "⏳ DNS aún propagándose... (${elapsed_time}s/${DNS_TIMEOUT}s)"
        print_warning "   Reintentando en 1 minuto..."
        sleep $DNS_CHECK_INTERVAL
        elapsed_time=$((elapsed_time + DNS_CHECK_INTERVAL))
    fi
done

if [ $elapsed_time -ge $DNS_TIMEOUT ]; then
    print_error "❌ Timeout esperando propagación DNS"
    print_error "   Verifica manualmente la configuración DNS en Hostinger"
    print_error "   Debe apuntar SOLO a: $EXPECTED_IP"
    exit 1
fi

echo ""
print_info "═══════════════════════════════════════════════════════════════"
print_info "                    FASE 3: CONFIGURACIÓN SSL"
print_info "═══════════════════════════════════════════════════════════════"

print_ssl "🔐 Configurando SSL con Let's Encrypt..."

# Verificar que el servidor responda desde el dominio
print_status "Verificando que el servidor responda desde el dominio..."
if ! curl -s http://$DOMAIN > /dev/null; then
    print_error "❌ El servidor no responde en http://$DOMAIN"
    print_error "   Verifica que el DNS esté configurado correctamente"
    exit 1
fi

print_status "✅ Servidor web funcionando correctamente desde el dominio"

# Obtener certificados SSL
print_ssl "🔐 Obteniendo certificados SSL de Let's Encrypt..."
docker compose run --rm certbot

# Verificar que los certificados se hayan creado
if [ ! -f "certbot/conf/live/$DOMAIN/fullchain.pem" ]; then
    print_error "❌ Error al obtener certificados SSL"
    print_error "   Verifica que el dominio esté configurado correctamente"
    exit 1
fi

print_status "✅ Certificados SSL obtenidos exitosamente"

echo ""
print_info "═══════════════════════════════════════════════════════════════"
print_info "                    FASE 4: ACTIVACIÓN HTTPS"
print_info "═══════════════════════════════════════════════════════════════"

# Restaurar configuración completa con SSL
print_ssl "🔧 Configurando HTTPS con redirección automática..."

# Crear configuración final con SSL
cat > nginx.conf << 'EOF'
events {
    worker_connections 1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    # Configuración de logs
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';

    access_log /var/log/nginx/access.log main;
    error_log /var/log/nginx/error.log;

    # Configuración de rendimiento
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;

    # Compresión gzip
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/json
        application/javascript
        application/xml+rss
        application/atom+xml
        image/svg+xml;

    # Redirección HTTP a HTTPS
    server {
        listen 80;
        server_name andinochain.xyz www.andinochain.xyz;
        
        # Para Let's Encrypt challenge
        location /.well-known/acme-challenge/ {
            root /var/www/certbot;
            try_files $uri =404;
        }
        
        # Redireccionar todo lo demás a HTTPS
        location / {
            return 301 https://$server_name$request_uri;
        }
    }

    # Servidor HTTPS
    server {
        listen 443 ssl http2;
        server_name andinochain.xyz www.andinochain.xyz;
        root /usr/share/nginx/html;
        index index.html;

        # Configuración SSL
        ssl_certificate /etc/letsencrypt/live/andinochain.xyz/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/andinochain.xyz/privkey.pem;
        
        # Configuración SSL moderna
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384;
        ssl_prefer_server_ciphers off;
        ssl_session_cache shared:SSL:10m;
        ssl_session_timeout 10m;
        
        # HSTS
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

        # Configuración para SPA (Single Page Application)
        location / {
            try_files $uri $uri/ /index.html;
        }

        # Cache para archivos estáticos
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }

        # Seguridad
        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header X-XSS-Protection "1; mode=block" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header Referrer-Policy "no-referrer-when-downgrade" always;
        add_header Content-Security-Policy "default-src 'self' https: data: blob: 'unsafe-inline'" always;

        # Error pages
        error_page 404 /index.html;
    }

    # Servidor local para desarrollo
    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        # Configuración para SPA (Single Page Application)
        location / {
            try_files $uri $uri/ /index.html;
        }

        # Cache para archivos estáticos
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }

        # Seguridad
        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header X-XSS-Protection "1; mode=block" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header Referrer-Policy "no-referrer-when-downgrade" always;
        add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

        # Error pages
        error_page 404 /index.html;
    }
}
EOF

# Reconstruir imagen con configuración SSL
print_ssl "🔄 Reconstruyendo imagen con configuración SSL..."
docker compose build --no-cache

# Reiniciar servicios
print_ssl "🔄 Reiniciando servicios con SSL habilitado..."
docker compose down
docker compose up -d

# Esperar a que el servidor esté listo
sleep 10

# Verificar HTTPS
print_ssl "🔍 Verificando HTTPS..."
if curl -s https://$DOMAIN > /dev/null; then
    print_status "✅ HTTPS funcionando correctamente!"
    
    echo ""
    print_info "═══════════════════════════════════════════════════════════════"
    print_info "                    🎉 DEPLOYMENT COMPLETADO 🎉"
    print_info "═══════════════════════════════════════════════════════════════"
    
    print_status "🌐 Tu sitio está disponible en:"
    print_status "   ✅ https://$DOMAIN"
    print_status "   ✅ https://www.$DOMAIN"
    print_status "   ✅ http://$DOMAIN (redirige a HTTPS)"
    print_status "   ✅ http://localhost (desarrollo local)"
    
    echo ""
    print_status "📋 Información del certificado:"
    docker compose exec andinochain-web openssl x509 -in /etc/letsencrypt/live/$DOMAIN/fullchain.pem -text -noout | grep -E "(Subject:|Not After:|DNS:)" || true
    
    echo ""
    print_status "🔧 Comandos útiles:"
    print_status "   📊 Ver logs: docker compose logs -f"
    print_status "   🔄 Renovar SSL: docker compose run --rm certbot renew && docker compose restart"
    print_status "   🛑 Detener: docker compose down"
    print_status "   📈 Estadísticas: docker stats"
    
    # Configurar renovación automática
    print_ssl "🔄 Configurando renovación automática de certificados..."
    
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
    (crontab -l 2>/dev/null; echo "0 3 * * 0 cd $(pwd) && ./renew-ssl.sh >> logs/ssl-renewal.log 2>&1") | crontab -

    print_status "✅ Renovación automática configurada (cada domingo a las 3 AM)"
    
else
    print_error "❌ Error al verificar HTTPS"
    print_error "   Revisa los logs: docker compose logs"
    exit 1
fi

echo ""
print_info "🎉 ¡Deployment completo exitoso!"
print_info "🔒 SSL configurado y funcionando"
print_info "🌐 Sitio web online con HTTPS"
print_info "🔄 Renovación automática activada"


