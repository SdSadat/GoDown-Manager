# Dockerfile for Frontend

# Use Node.js base image
FROM node:alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application for production
RUN npm run build

# Expose the application port
EXPOSE 7777

# Command to run the application
CMD ["npm", "run", "dev", "--", "--host"]
