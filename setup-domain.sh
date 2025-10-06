#!/bin/bash

# Script para configurar el dominio en Nginx
# Uso: ./setup-domain.sh tu-dominio.com

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
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

# Verificar que se proporcione el dominio
if [ -z "$1" ]; then
    print_error "Debes proporcionar el dominio como parámetro"
    echo "Uso: ./setup-domain.sh tu-dominio.com"
    exit 1
fi

DOMAIN=$1

print_status "Configurando dominio: $DOMAIN"

# Crear backup de la configuración actual
cp nginx.conf nginx.conf.backup
print_status "Backup creado: nginx.conf.backup"

# Actualizar la configuración de Nginx con el dominio real
sed -i "s/tu-dominio.com/$DOMAIN/g" nginx.conf

print_status "Configuración de Nginx actualizada"

# Reconstruir y reiniciar el contenedor
print_status "Reconstruyendo contenedor con nueva configuración..."
docker compose down
docker compose build --no-cache
docker compose up -d

# Esperar un momento
sleep 5

# Verificar que el contenedor esté corriendo
if docker compose ps | grep -q "Up"; then
    print_status "✅ Configuración del dominio completada!"
    print_status "🌐 Tu sitio estará disponible en:"
    print_status "   - http://$DOMAIN"
    print_status "   - http://www.$DOMAIN"
    print_status "   - http://localhost (local)"
    
    echo ""
    print_warning "⏳ IMPORTANTE:"
    print_warning "1. Configura los registros DNS en Hostinger:"
    print_warning "   Tipo: A, Nombre: @, Valor: 89.116.51.183"
    print_warning "   Tipo: A, Nombre: www, Valor: 89.116.51.183"
    print_warning "2. Espera 5-15 minutos para que los DNS se propaguen"
    print_warning "3. Verifica con: nslookup $DOMAIN"
else
    print_error "❌ Error al reiniciar el contenedor"
    print_status "Restaurando configuración anterior..."
    cp nginx.conf.backup nginx.conf
    docker compose up -d
    exit 1
fi

echo ""
print_status "🎉 ¡Configuración completada!"



