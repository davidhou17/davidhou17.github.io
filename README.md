# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/36980ea9-5ba5-499f-9f0a-5057cadd96ee

## GitHub Pages Deployment
This project is configured to deploy to GitHub Pages. To deploy your site:

### Automatic Deployment
The project is set up with GitHub Actions for automatic deployment:
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

### Custom Domain Setup
If you want to use a custom domain:
1. Update the CNAME file in the public directory with your domain
2. Configure your DNS provider to point to GitHub Pages
3. Enable custom domain in your repository's GitHub Pages settings

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/36980ea9-5ba5-499f-9f0a-5057cadd96ee) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

You can deploy this project using:

1. **GitHub Pages**: Follow the GitHub Pages deployment instructions above.
2. **Lovable**: Open [Lovable](https://lovable.dev/projects/36980ea9-5ba5-499f-9f0a-5057cadd96ee) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
