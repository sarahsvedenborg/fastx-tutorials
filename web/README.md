This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Styling

The project uses normal CSS3 with SCSS. As the application supports both dark mode and light mode, the stylesheets are structured as follows:

global.scss: all default values and global values.
themeDark.scss: all dark theme specific styles
lightTheme.scss: same structure as themeDark.scss, but with the light details.
All other pages and components have their own scss file which begins with a wrapping style, i.e.: a tutorial plage component's stylesheet begins wilth .tutorialPage {...} and all its styles are nested in there. If they should be overwritten by light or dark theme, then the .tutorialPage class must be added to and overwritten in lightTheme.scss and/or themeDark.scss.

moreover, all components have thei own style folder in the components folder. All these styles are then importen in the globasl.sccs file. All pages have their own style-files in the styles folder at the root of the project.
