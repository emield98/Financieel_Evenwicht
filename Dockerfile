# Use official Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package.json yarn.lock ./

# Install dependencies (this will install next)
RUN yarn install

# Now copy the rest of the app
COPY . .

# Build the app
RUN yarn build

# Expose the port
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]
