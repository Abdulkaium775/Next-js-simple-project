# Next.js 15 Product Management App

A simple application built with **Next.js 15 (App Router)** and **NextAuth.js** for authentication.  
Users can browse products, view details, and after logging in, manage products.

---

## 🚀 Features
- Landing page with Navbar, Hero, Highlights, Footer
- Authentication with NextAuth.js (Google login)
- Public product list + product details
- Protected dashboard page for adding products
- API routes for fetching & creating products
- Toast messages & loading spinners
- Theme toggle (light/dark)

---

## 🛠️ Tech Stack
- Next.js 15 (App Router)
- NextAuth.js
- Tailwind CSS
- Mock backend via Route Handlers (`/api`)

---

## 📂 Routes Summary
- `/` → Landing Page
- `/login` → Login with NextAuth
- `/products` → Product list
- `/products/[id]` → Product details
- `/dashboard/add-product` → Protected page (Add new product)

---

## ⚙️ Setup & Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Abdulkaium775/Next-js-simple-project.git
   cd next15-products-app
Install dependencies:

bash
Copy
Edit
npm install
Configure environment variables:
Create a .env.local file:

env
Copy
Edit
NEXTAUTH_SECRET=your-secret-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
Run the development server:

bash
Copy
Edit
npm run dev
Build for production:

bash
Copy
Edit
npm run build && npm start
🔗 Live Demo
Vercel: [your-vercel-link](https://next-js-simple-project.vercel.app/)

📦 Repository
GitHub: [your-github-repo](https://github.com/Abdulkaium775/Next-js-simple-project)