# Etapa 1: build
FROM node:18 AS builder

RUN apt-get update && apt-get install -y ca-certificates
ENV NODE_OPTIONS="--tls-min-v1.2"

WORKDIR /app

# Copiamos package.json y package-lock.json
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos todo el código
COPY . .

# Build de Next.js
RUN npm run build

# Etapa 2: runtime
FROM node:18

WORKDIR /app

# Copiamos solo lo necesario
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]
