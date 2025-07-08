# Use Node.js base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install

COPY . .

# Expose port
EXPOSE 5000

# Run server
CMD ["node", "server.js"]
