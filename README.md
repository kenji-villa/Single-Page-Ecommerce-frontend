# Single-Page E-Commerce Frontend

A responsive single-page e-commerce frontend application built with **React (Vite)**, **React Router**, **Context API**, **Tailwind CSS**, and **localStorage**.

---

## Project Overview

This application simulates a small e-commerce platform where users can browse products, search and filter items, add products to a shopping cart, complete a checkout process, and view previous orders.

Since no backend server is used, all product data is stored locally and browser **localStorage** is used to simulate data persistence and caching.

---

## Technologies Used

- React (Vite)
- React Router DOM
- React Context API
- Tailwind CSS
- JavaScript (ES6+)
- HTML5
- CSS3
- Browser localStorage

---


## Features

### Product Catalog
- Displays multiple hardcoded products
- Each product includes:
  - Product Image
  - Product Name
  - Price
  - Stock Status
- Responsive product grid

---

### Search & Filtering
- Search products by name
- Dynamic category filtering
- Categories are generated automatically from the product dataset
- Instant filtering while typing

---

### Shopping Cart
- Add products to cart
- Remove products
- Update product quantity
- Automatically calculate total price
- Cart data persists after page refresh using localStorage
- Shared state managed using React Context API

---

### Product Details
- Individual product page
- Displays:
  - Large product image
  - Description
  - Price
  - Category
  - Stock status
- Add to Cart functionality

---

### Checkout
- Customer information form
- Form validation
- Order summary
- Stores completed orders in localStorage
- Clears cart after successful purchase
- Displays order confirmation message

---

### Order History
- Displays previously placed orders
- Shows:
  - Purchase date
  - Purchased items
  - Quantities
  - Total order amount

---

## Caching Implementation

### Product Cache

To improve performance, product data is cached in **localStorage**.

**How it works:**

1. On first application load:
   - A simulated **500ms network delay** is introduced using `setTimeout()`.
   - Product data is loaded.
   - Products are stored inside localStorage with a timestamp.

2. On subsequent visits:
   - The application checks whether cached data exists.
   - If the cache is **less than 5 minutes old**, products are loaded instantly without delay.

3. Cache expiration:
   - After **5 minutes**, cached data expires.
   - The application simulates the network delay again.
   - The cache is refreshed with a new timestamp.

### Search Cache

The application also stores the user's recent searches.

Features:
- Stores the last **3 unique search queries**
- Prevents duplicate entries
- Displays recent search suggestions (if implemented)
- Search history is saved in localStorage

---

## Project Structure

```

src/
│
├── assets/
│       Product images
│
├── components/
│       Navbar.jsx
│       ProductCard.jsx
│
├── context/
│       CartContext.jsx
│
├── data/
│       products.js
│
├── pages/
│       Home.jsx
│       ProductDetails.jsx
│       Cart.jsx
│       Checkout.jsx
│       Orders.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

## How to Run

Clone the repository

```bash
git clone https://github.com/kenji-villa/Single-Page-Ecommerce-frontend.git
```

Navigate into the project

```bash
cd Single-Page-Ecommerce-frontend
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open your browser

```
http://localhost:5173
```

## Local Storage Keys

The application stores the following data:

| Key | Description |
|------|-------------|
| cart | Current shopping cart |
| products_cache | Cached product data with timestamp |
| orders | Order history |
| search_history | Last three search queries |

---



















