# Obod Soft - Web & Mobile App Experts

A modern, responsive marketing site for Obod Soft built with Next.js. The project showcases our services, past work, and includes a contact form for new engagements.

## Features

- Modern and responsive design with Next.js and React
- Smooth animations and transitions
- Mobile-friendly navigation
- Contact form with email functionality
- Dedicated pages for services, about, portfolio, and contact
- Engaging marketing copy on each page to convert visitors
- Static site generation for optimal performance

## Technologies Used

- Next.js (with Static Site Generation)
- React
- TypeScript
- CSS3 (with modern features like Flexbox and Grid)
- Font Awesome for icons
- Google Fonts (Poppins)

## Requirements

- Node.js (v14 or later)
- npm or yarn

## Setup and Deployment

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
```

### Local Development

```bash
# Start development server
npm run dev
# or
yarn dev
```

This will start the development server on [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
# Create a production build
npm run build
# or
yarn build
```

### GitHub Pages Deployment

The Next.js app is configured for static export, making it suitable for GitHub Pages:

```bash
# Create a static export
npm run build
npm run export
# or
yarn build
yarn export
```

The static files will be generated in the `out` directory, which can be deployed to GitHub Pages.

## Project Structure

```
├── public/             # Static files like images
├── src/
│   ├── app/            # Next.js app directory with layouts and pages
│   ├── components/      # React components
│   ├── styles/          # CSS files
│   └── utils/           # Utility functions
├── next.config.mjs      # Next.js configuration
└── tsconfig.json       # TypeScript configuration
```

## Contact

For any inquiries, please contact: alex@obodsoft.com

