# Use official Node.js LTS image with Alpine for smaller size
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy only the dependency files first for Docker caching
COPY package.json yarn.lock ./

# Install dependencies with exact versions
RUN yarn install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Build the Next.js app
RUN yarn build

# Expose the default Next.js port
EXPOSE 3000

# Ensure the app listens to PORT from environment (Render injects it)
ENV PORT 3000

# Start the app
CMD ["yarn", "start"]
