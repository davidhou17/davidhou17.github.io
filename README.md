### Automatic Deployment
The website is set up with GitHub Actions for automatic deployment:
1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at: https://dhou.github.io

### Manual Deployment
You can also deploy manually:
```sh
# Run the provided deploy script
./deploy.sh

# Or deploy step by step
npm run build
npm run deploy
```

## What technologies are used for this project?

This website is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
