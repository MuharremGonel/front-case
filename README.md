# Front-End Case Project

This repository contains a **Front-End Case Project** developed as part of a technical assessment. The project showcases a dynamic and responsive web application built with modern tools and technologies.

## Features

- **Dynamic Product Listing**: Fetches products dynamically from the [DummyJSON API](https://dummyjson.com/).  
- **Category-Based Filtering**: Displays products based on their categories.
- **Product Details Page**: Shows detailed information about individual products.
- **Responsive Design**: Optimized for all devices, including desktops, tablets, and mobile phones.
- **Efficient State Management**: Leveraging React's `useState` and `useEffect` for seamless UI updates.
- **Reusable Components**: Built with a modular approach for scalability and maintainability.

## Technologies Used

- **Next.js**: Framework for server-side rendering and static site generation.
- **React**: For building user interfaces.
- **TypeScript**: Ensures type safety throughout the codebase.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Radix UI**: For accessible and customizable components.
- **Swiper.js**: Image gallery slider.

## Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/MuharremGonel/front-case.git
   cd front-case
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy the `sample.env.local` file to `.env.local`:
     ```bash
     cp sample.env.local .env.local
     ```
   - (Optional) Update `.env.local` with your custom configuration.
   

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## API Integration

The project uses the [DummyJSON API](https://dummyjson.com/) for fetching product data. Example endpoints:
- All Products: `https://dummyjson.com/products`
- By Category: `https://dummyjson.com/products/category/{category}`

## Folder Structure

```
front-case/
├── components/        # Reusable UI components
├── pages/             # Next.js pages
├── styles/            # Global and component-specific styles
├── public/            # Static assets
├── utils/             # Helper functions and utilities
└── README.md          # Project documentation
```

## Deployment

To deploy the application, follow these steps:
1. Build the project:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm run start
   ```
3. Alternatively, deploy using platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the license terms.
