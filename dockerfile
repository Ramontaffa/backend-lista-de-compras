# backend/Dockerfile

# Use uma imagem Node.js v18 (ou mais recente)
FROM node:18-alpine

# Habilite o pnpm usando corepack (nativo do Node)
RUN corepack enable

# Defina o diretório de trabalho no container
WORKDIR /usr/src/app

# Copie os arquivos de manifesto de pacotes
COPY package.json pnpm-lock.yaml ./

# Instale dependências usando pnpm
RUN pnpm install --frozen-lockfile

# Copie o restante do código-fonte
COPY . .

# Gere o Prisma Client (essencial para o container)
RUN pnpm prisma generate

# Exponha a porta do Express
EXPOSE 3000

# Comando para iniciar o app (com nodemon)
CMD [ "pnpm", "start:dev" ]