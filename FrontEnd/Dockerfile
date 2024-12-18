# Étape 1: Build avec Node.js
FROM node:18 AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers package.json et yarn.lock
COPY package.json yarn.lock ./

# Installer les dépendances
RUN yarn install --frozen-lockfile

# Copier le reste de l'application
COPY . .

# Donner les permissions d'exécution à Vite
RUN chmod +x ./node_modules/.bin/vite

# Construire le projet avec Vite
RUN yarn build

# Étape 2: Serveur Nginx
FROM nginx:alpine

# Copier les fichiers construits vers le répertoire Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exposer le port de Nginx
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
