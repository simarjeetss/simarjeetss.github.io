# Simarjeet's Portfolio Website

## Development

To run the website locally:

```bash
npm install
npm start
```

## Deployment

This website is deployed on Vercel at [simarjeet.dev](https://simarjeet.dev).

### Image Assets

Images are stored in `public/assets/pics/` and are referenced with absolute paths in the code:

```jsx
// Example of how images are referenced
const imagePath = '/assets/pics/1.jpg';
```

If images are not displaying on the deployed site:

1. Verify images are correctly uploaded to Vercel under `/assets/pics/`
2. Use absolute paths (starting with `/`) to reference images
3. Check the `vercel.json` configuration
4. Clear the browser cache or try a different browser

### Globe Component

The site includes a 3D globe component using the `cobe` library, which is integrated in the Home page.