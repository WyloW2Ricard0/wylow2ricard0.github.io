FROM node:18-alpine

WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json ./

# Installer les dépendances (avec --legacy-peer-deps pour éviter les conflits)
RUN npm install --legacy-peer-deps

# Copier le reste du code
COPY . .

# Exposer le port 3000
EXPOSE 3000

# Lancer React
CMD ["npm", "start"]
