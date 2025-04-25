# Use official Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Install dependencies
RUN yarn install

# Build Next.js app
RUN yarn build

# Expose the port Next.js will run on
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]
