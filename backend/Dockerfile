# Use official Node image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copu all source codes
COPY . .

# Expose port 
EXPOSE 5000

# Start the app
CMD ["npm", "start", "dev"]
