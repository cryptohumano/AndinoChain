#!/bin/bash

# Script de deployment para AndinoChain
# Uso: ./deploy.sh

set -e  # Salir si hay algún error

echo "🚀 Iniciando deployment de AndinoChain..."

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

# Verificar que Docker esté instalado
if ! command -v docker &> /dev/null; then
    print_error "Docker no está instalado. Por favor instala Docker primero."
    exit 1
fi

# Verificar que Docker Compose esté instalado (versión moderna como plugin)
if ! docker compose version &> /dev/null; then
    print_error "Docker Compose no está instalado. Por favor instala Docker Compose primero."
    exit 1
fi

# Crear directorio de logs si no existe
mkdir -p logs

print_status "Construyendo imagen Docker..."
docker compose build --no-cache

print_status "Deteniendo contenedores existentes..."
docker compose down

print_status "Iniciando servicios..."
docker compose up -d

# Esperar un momento para que el contenedor se inicie
sleep 5

# Verificar que el contenedor esté corriendo
if docker compose ps | grep -q "Up"; then
    print_status "✅ Deployment exitoso!"
    print_status "🌐 Tu sitio web está disponible en: http://localhost"
    print_status "📊 Para ver logs: docker compose logs -f"
    print_status "🛑 Para detener: docker compose down"
else
    print_error "❌ El deployment falló. Revisa los logs con: docker compose logs"
    exit 1
fi

# Mostrar información del contenedor
echo ""
print_status "📋 Información del contenedor:"
docker compose ps

echo ""
print_status "🎉 ¡Deployment completado exitosamente!"
