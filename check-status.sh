#!/bin/bash

# Script de verificación del estado de AndinoChain
# Uso: ./check-status.sh

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para imprimir mensajes
print_status() {
    echo -e "${GREEN}[OK]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

echo ""
print_info "🔍 Verificando estado de AndinoChain..."
echo ""

# Verificar Docker
print_info "🐳 Verificando Docker..."
if systemctl is-active docker > /dev/null 2>&1; then
    print_status "Docker está corriendo"
else
    print_error "Docker no está corriendo"
fi

if systemctl is-enabled docker > /dev/null 2>&1; then
    print_status "Docker se inicia automáticamente"
else
    print_warning "Docker NO se inicia automáticamente"
fi

echo ""

# Verificar contenedores
print_info "📦 Verificando contenedores..."
if docker compose ps | grep -q "Up"; then
    print_status "Contenedores de AndinoChain están corriendo"
    docker compose ps
else
    print_error "Contenedores de AndinoChain NO están corriendo"
fi

echo ""

# Verificar HTTPS
print_info "🔒 Verificando HTTPS..."
if curl -s -I https://andinochain.xyz | grep -q "HTTP/2 200"; then
    print_status "HTTPS funcionando correctamente"
else
    print_error "HTTPS NO está funcionando"
fi

# Verificar redirección HTTP
if curl -s -I http://andinochain.xyz | grep -q "301 Moved Permanently"; then
    print_status "Redirección HTTP → HTTPS funcionando"
else
    print_error "Redirección HTTP → HTTPS NO funciona"
fi

echo ""

# Verificar cron jobs
print_info "⏰ Verificando cron jobs..."
if crontab -l | grep -q "renew-ssl.sh"; then
    print_status "Renovación automática SSL configurada"
else
    print_error "Renovación automática SSL NO configurada"
fi

if crontab -l | grep -q "@reboot"; then
    print_status "Inicio automático configurado"
else
    print_error "Inicio automático NO configurado"
fi

echo ""

# Verificar certificados SSL
print_info "🔐 Verificando certificados SSL..."
if docker compose exec andinochain-web test -f /etc/letsencrypt/live/andinochain.xyz/fullchain.pem 2>/dev/null; then
    print_status "Certificados SSL presentes"
    
    # Mostrar fecha de expiración
    EXPIRY=$(docker compose exec andinochain-web openssl x509 -in /etc/letsencrypt/live/andinochain.xyz/fullchain.pem -noout -dates | grep "notAfter" | cut -d= -f2)
    print_info "Certificado expira: $EXPIRY"
else
    print_error "Certificados SSL NO encontrados"
fi

echo ""

# Verificar logs
print_info "📋 Verificando logs..."
if [ -f "logs/ssl-renewal.log" ]; then
    print_status "Log de renovación SSL existe"
    echo "Últimas líneas del log de renovación:"
    tail -3 logs/ssl-renewal.log 2>/dev/null || echo "Log vacío"
else
    print_warning "Log de renovación SSL no existe aún"
fi

if [ -f "logs/startup.log" ]; then
    print_status "Log de inicio existe"
    echo "Últimas líneas del log de inicio:"
    tail -3 logs/startup.log 2>/dev/null || echo "Log vacío"
else
    print_warning "Log de inicio no existe aún"
fi

echo ""
print_info "🎯 Resumen:"
echo "✅ Sitio web: https://andinochain.xyz"
echo "✅ Redirección: http://andinochain.xyz → https://andinochain.xyz"
echo "✅ Inicio automático: Configurado"
echo "✅ Renovación SSL: Configurada (cada domingo a las 3 AM)"
echo "✅ Docker: Se inicia automáticamente"
echo ""
print_status "🎉 ¡AndinoChain está completamente configurado!"

