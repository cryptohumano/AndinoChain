#!/bin/bash
echo "🔄 Renovando certificados SSL..."
docker compose run --rm certbot renew
docker compose restart andinochain-web
echo "✅ Renovación completada"
