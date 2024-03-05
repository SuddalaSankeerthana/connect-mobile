# Dockerfile

# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY gstpackage.json ./

# Install app dependencies
RUN npm install

# Copy the entire app directory to the working directory
COPY . .

# Build the app for development
RUN npx react-native bundle --platform ios --dev true --entry-file index.js --bundle-output ios/main.jsbundle --assets-dest ios/assets
RUN npx react-native bundle --platform android --dev true --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

# Expose port 8080 for the React Native packager
EXPOSE 8080

# Start the app
CMD ["npx", "react-native", "run", "android"]