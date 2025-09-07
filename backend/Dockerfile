FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
# backend has no build step; prod deps only is fine:
RUN npm install --omit=dev
COPY . .
EXPOSE 3001
CMD ["node","server.js"]
