# Luxe Label – Fashion E‑Commerce

Multi-page React fashion e-commerce site with category-based shopping, scrollable product detail modals, wishlist, cart with INR pricing, authentication, and checkout. [web:17][web:55]

---

## Features

- Multi-page routing with React Router (Home, Shop, Categories, Men, Women, Accessories, Wishlist, Cart, Checkout, Auth, static info pages). [web:17]
- Clean, minimalist, responsive UI with shared header and footer.
- Product grids with **Load More** on Home, Shop, and category pages.
- Product details shown in a scrollable modal (no new page) in a strict section order. [web:15]
- Wishlist with add/remove and localStorage persistence per logged-in user. [web:22]
- Cart with quantity updates, remove items, and INR totals via `Intl.NumberFormat`. [web:16]
- Login/Signup with context-based authentication and protected routes. [web:67]
- Checkout with shipping form, order summary, and payment options (UPI, Card, Net Banking). [web:79]

---

## Tech Stack

- React
- React Router v6
- Context API + hooks
- LocalStorage persistence
- Vite as build tool [web:49]

---

## Project Structure
src/   
├── App.jsx  
├── main.jsx  
├── routes/  
│   └── Router.jsx  
├── components/  
│   ├── Layout.jsx   
│   ├── Header.jsx    
│   ├── Footer.jsx    
│   ├── ProductCard.jsx      
│   ├── ProductModal.jsx    
│   └── ProtectedRoute.jsx   
├── context/    
│   ├── AuthContext.jsx    
│   ├── CartContext.jsx    
│   └── WishlistContext.jsx    
├── pages/    
│   ├── Home.jsx    
│   ├── Shop.jsx    
│   ├── Categories.jsx    
│   ├── CategoryMen.jsx   
│   ├── CategoryWomen.jsx    
│   ├── CategoryAccessories.jsx   
│   ├── Wishlist.jsx    
│   ├── Cart.jsx    
│   ├── Checkout.jsx    
│   ├── OrderConfirmation.jsx    
│   ├── Login.jsx     
│   ├── Signup.jsx     
│   ├── About.jsx    
│   ├── Faqs.jsx   
│   ├── ReturnsRefunds.jsx   
│   ├── PrivacyPolicy.jsx    
│   ├── TermsConditions.jsx   
│   └── Contact.jsx    
├── data/   
│   └── products.js   
└── styles/    
    └── index.css   



## Getting Started

install dependencies
npm install

start dev server
npm run dev

build for production
npm run build

preview production build
npm run preview

## License

Add your preferred license (for example, MIT) here.

