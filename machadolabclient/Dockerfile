# Use an official Node runtime as a parent image
FROM node:21

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Run Next.js in production mode
CMD ["npm", "run", "dev"]
