# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Instala las dependencias usando pnpm
RUN npm install -g pnpm@6 && pnpm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila la aplicación
RUN pnpm build

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["pnpm", "start:prod"]