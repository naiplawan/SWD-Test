```markdown

## 🌟 Key Features

### Shape Management Interface
- Interactive shape controls with custom CSS/SCSS styling
- Dynamic button actions:
  - Move Shape: Rotate geometric shapes (e.g., squares, circles) 90 degrees counterclockwise
  - Move Position: Toggle the grid layout between a single column and multiple columns, changing the vertical alignment of shapes.
  - Random Position: Randomize shape positions within the grid layout on click
- Custom color scheme featuring #FFA200 (used for primary buttons and highlights) and #6EDA78 (used for success messages and accents)
- Responsive layout using Ant Design components

### Personal Data Management
- Full Create, Read, Update, and Delete (CRUD) operations with Local Storage persistence
- Data survives page refreshes
- Table features with pagination: Allows users to navigate through large sets of data efficiently by dividing the data into manageable pages, improving load times and user experience.
- Individual record deletion capability
- Form state management using Redux Toolkit: Redux Toolkit was chosen for its simplicity and ease of use in managing complex state logic. It offers a standardized way to write Redux logic, reduces boilerplate code, and includes powerful tools like createSlice and createAsyncThunk for efficient state management.

### Internationalization
- Multi-language support implemented with [i18next](https://www.i18next.com/), a popular internationalization framework for JavaScript.
- Language switcher component

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), a tool that helps you quickly set up a new Next.js application with a default project structure and configuration, making it easier to get started with development.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel. The `next/font` package helps in optimizing font loading, reducing layout shifts, and improving page load performance. The [Geist](https://vercel.com/font) font family enhances the visual appeal and readability of the application.

## Running with Docker

To run the development server with Docker:

1. Build and start the Docker container:

    ```bash
    docker compose -f docker-compose.dev.yml up -d --build
    ```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. To view the logs:

    ```bash
    docker logs swd-frontend-test
    ```

4. To stop the Docker container:

    ```bash
    docker compose -f docker-compose.dev.yml down
    ```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# swd-frontend-test
```

Similar code found with 1 license type
