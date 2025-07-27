#!/bin/bash
set -e # Exit immediately if a command exits with a non-zero status

# Build the project
echo "Building the project..."
npm run build

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npm run deploy

echo "Deployment complete! Your site should be live shortly at https://davidhou17.github.io/"