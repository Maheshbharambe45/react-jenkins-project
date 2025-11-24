FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

# Serve the build using a simple static server
RUN npm install -g serve

EXPOSE 5000
CMD ["serve", "-s", "build", "-l", "5000"]
