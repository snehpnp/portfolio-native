# Step 1: Node.js 18 ke base image ka use karein
FROM node:18

# Step 2: Container ke andar work directory set karein
WORKDIR /app

# Step 3: Package.json aur package-lock.json copy karein
COPY package*.json ./

# Step 4: Dependencies install karein
RUN npm install -g expo-cli
RUN npm install

# Step 5: Project ke sare files container me copy karein
COPY . .

# Step 6: Expo development server ke required ports expose karein
EXPOSE 8081 19000 19001 19002

# Step 7: Expo server ko start karein
CMD ["npx", "expo", "start", "--tunnel"]
