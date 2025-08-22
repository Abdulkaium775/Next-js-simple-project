Next.js Product Management App
Project Description

This is a simple product management application built with Next.js 15 (App Router). The app allows users to browse products, view product details, and add new products after logging in. Authentication is handled via NextAuth.js, supporting Google and credential login.

Core Features:

Landing page with Navbar, Hero section, Product Highlights, and Footer

Public product list and product details pages

Login page with NextAuth.js (Google or credentials)

Protected page for adding new products (accessible only when logged in)

Optional enhancements: loading spinner, toast messages, and theme toggle

Technologies Used

Next.js 15 (App Router)

NextAuth.js for authentication

MongoDB with Mongoose

Tailwind CSS for styling

Axios for HTTP requests

Vercel for deployment

Setup & Installation

Clone the repository

git clone <https://github.com/Abdulkaium775/Next-Js-simple-projects>
cd <Next-Js-simple-projects>


Install dependencies

npm install



GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here


Run the development server

npm run dev


Open your browser

https://next-js-simple-project.vercel.app

Folder Structure
src/
 ├─ app/
 │   ├─ api/
 │   │   └─ products/route.js       # API route for products (GET/POST)
 │   ├─ dashboard/
 │   │   └─ add-product/page.js     # Protected page to add products
 │   ├─ products/
 │   │   ├─ [id]/page.js            # Product details page
 │   │   └─ page.js                 # Product list page
 │   ├─ login/page.js                # Login page
 │   └─ page.js                      # Landing page
 ├─ lib/
 │   └─ mongodb.js                   # MongoDB connection
 └─ models/
     └─ Product.js                   # Mongoose product model

Route Summary
Route	Access	Description
/	Public	Landing page with hero, product highlights, and navigation
/login	Public	Login page using NextAuth.js (Google or credentials)
/products	Public	List of all products
/products/[id]	Public	Product details page
/dashboard/add-product	Protected	Form to add new products; redirects to /login if unauthenticated
/api/products	Public/Protected	API route (GET all products, POST new product – POST requires authentication)
Optional Enhancements

Loading spinner when submitting forms

Toast messages for successful product addition

Theme toggle (light/dark) using Tailwind CSS

Deployment

The project can be deployed on Vercel.

Make sure environment variables are configured in the Vercel dashboard.

License

MIT