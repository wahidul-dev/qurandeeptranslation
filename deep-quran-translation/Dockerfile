# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any dependencies
RUN npm install

# Install Tailwind CSS and its peer dependencies
RUN npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind CSS (this will create a tailwind.config.js file)
RUN npx tailwindcss init

# Copy the rest of your application's source code
COPY . .

# Expose port 3000 to the outside once the container has launched
EXPOSE 3000

# Start the application in development mode with hot reloading
CMD ["npm", "start"]
