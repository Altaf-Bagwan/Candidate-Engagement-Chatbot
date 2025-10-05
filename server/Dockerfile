# server/Dockerfile

# 🔵 STEP 1: Choose base image
# This is like choosing which operating system + Node.js version to use
FROM node:18-alpine

# 🔵 STEP 2: Set working directory
# All commands will run inside /app folder in the container
WORKDIR /app

# 🔵 STEP 3: Copy package files FIRST (this is smart!)
# Why first? Docker caches this step. If package.json doesn't change,
# it won't reinstall dependencies (saves time!)
COPY package*.json ./

# 🔵 STEP 4: Install dependencies
# npm ci = clean install (faster and more reliable than npm install)
RUN npm ci

# 🔵 STEP 5: Copy all source code
# Now copy your TypeScript files
COPY . .

# 🔵 STEP 6: Build TypeScript to JavaScript
# This runs: tsc (compiles TS → JS in dist/ folder)
RUN npm run build

# 🔵 STEP 7: Tell Docker which port to expose
# Your server runs on port 3001
EXPOSE 3001

# 🔵 STEP 8: Command to start the server
# This runs: node dist/index.js
# Use node directly, not npm
CMD ["node", "dist/index.js"]