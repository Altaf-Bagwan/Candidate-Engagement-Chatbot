# client/Dockerfile

# 🔵 STEP 1: Base image
FROM node:18-alpine

# 🔵 STEP 2: Working directory
WORKDIR /app

# 🔵 STEP 3: Copy package files
COPY package*.json ./

# 🔵 STEP 4: Install dependencies
RUN npm ci

# 🔵 STEP 5: Copy source code
COPY . .

# 🔵 STEP 6: Expose Vite dev server port
EXPOSE 5173

# 🔵 STEP 7: Start Vite dev server
# --host 0.0.0.0 = Allow access from outside container (IMPORTANT!)
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]