# 🚀 Guía de Deployment - AndinoChain

## 📋 Resumen
Esta guía te ayudará a deployar tu proyecto AndinoChain en un VPS usando Docker + Nginx y conectarlo con un dominio de Hostinger.

## 🛠️ Archivos creados
- `Dockerfile` - Imagen Docker optimizada con Nginx
- `docker-compose.yml` - Orquestación de contenedores
- `nginx.conf` - Configuración optimizada de Nginx
- `deploy.sh` - Script automatizado de deployment

## 🚀 Pasos para el Deployment

### 1. Preparar el VPS
```bash
# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Instalar Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Agregar usuario al grupo docker
sudo usermod -aG docker $USER
```

### 2. Subir el proyecto al VPS
```bash
# Opción A: Git (recomendado)
git clone https://github.com/tu-usuario/AndinoChain.git
cd AndinoChain

# Opción B: SCP
scp -r /home/edoga/AndinoChain usuario@tu-vps-ip:/home/usuario/
```

### 3. Ejecutar el deployment
```bash
# Hacer ejecutable el script
chmod +x deploy.sh

# Ejecutar deployment
./deploy.sh
```

### 4. Configurar DNS en Hostinger

#### En el panel de Hostinger:
1. **Accede a tu cuenta de Hostinger**
2. **Ve a "Dominios" → "Administrar"**
3. **Selecciona tu dominio**
4. **Ve a "Zona DNS"**

#### Configuración DNS:
```
Tipo: A
Nombre: @
Valor: IP_DE_TU_VPS
TTL: 3600

Tipo: A  
Nombre: www
Valor: IP_DE_TU_VPS
TTL: 3600
```

### 5. Verificar el deployment
```bash
# Verificar que el contenedor esté corriendo
docker-compose ps

# Ver logs
docker-compose logs -f

# Probar localmente
curl http://localhost
```

## 🔧 Comandos útiles

### Gestión del contenedor:
```bash
# Iniciar servicios
docker-compose up -d

# Detener servicios
docker-compose down

# Ver logs
docker-compose logs -f

# Reconstruir imagen
docker-compose build --no-cache

# Reiniciar servicios
docker-compose restart
```

### Monitoreo:
```bash
# Ver uso de recursos
docker stats

# Ver procesos del contenedor
docker-compose exec andinochain-web ps aux

# Acceder al contenedor
docker-compose exec andinochain-web sh
```

## 🔒 Configuración HTTPS (Opcional)

Para habilitar HTTPS con Let's Encrypt:

### 1. Instalar Certbot
```bash
sudo apt install certbot python3-certbot-nginx
```

### 2. Obtener certificado
```bash
sudo certbot --nginx -d tu-dominio.com -d www.tu-dominio.com
```

### 3. Actualizar docker-compose.yml
```yaml
volumes:
  - ./certbot/conf:/etc/letsencrypt
  - ./certbot/www:/var/www/certbot
```

## 📊 Optimizaciones incluidas

### Nginx:
- ✅ Compresión gzip habilitada
- ✅ Cache para archivos estáticos (1 año)
- ✅ Headers de seguridad
- ✅ Soporte para SPA (Single Page Application)
- ✅ Logs optimizados

### Docker:
- ✅ Multi-stage build (imagen más pequeña)
- ✅ Alpine Linux (menor consumo de recursos)
- ✅ Restart automático
- ✅ Red dedicada

## 🚨 Solución de problemas

### El sitio no carga:
```bash
# Verificar puertos
sudo netstat -tlnp | grep :80

# Verificar logs
docker-compose logs

# Verificar DNS
nslookup tu-dominio.com
```

### Error de permisos:
```bash
# Verificar permisos de Docker
sudo usermod -aG docker $USER
# Reiniciar sesión
```

### Puerto 80 ocupado:
```bash
# Cambiar puerto en docker-compose.yml
ports:
  - "8080:80"  # Usar puerto 8080
```

## 📈 Monitoreo y mantenimiento

### Logs:
- Los logs se guardan en `./logs/`
- Rotación automática configurada

### Actualizaciones:
```bash
# Actualizar código
git pull origin main

# Reconstruir y desplegar
./deploy.sh
```

## 💡 Consejos adicionales

1. **Backup**: Configura backups regulares de tu VPS
2. **Monitoreo**: Considera usar herramientas como UptimeRobot
3. **CDN**: Para mejor rendimiento global, considera Cloudflare
4. **SSL**: Siempre usa HTTPS en producción

## 🆘 Soporte

Si tienes problemas:
1. Revisa los logs: `docker-compose logs`
2. Verifica la configuración DNS
3. Asegúrate de que el puerto 80 esté abierto en el firewall

---

¡Tu sitio AndinoChain estará online en pocos minutos! 🎉



