FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Port domyślny Vite
EXPOSE 5173

# Odpalamy Vite z flagą --host, żeby był widoczny poza kontenerem
CMD ["npm", "run", "dev", "--", "--host"]