# 🌍 Wanderlust — Travel Rental Web App

A full-stack travel rental application inspired by Airbnb.  
Users can browse listings, view details, create accounts, login, add new listings, edit them, and manage their profile.  
Built with **Node.js**, **Express**, **EJS**, **MongoDB**, and clean MVC architecture.

---

## 🚀 Demo  
_Not deployed yet — will add soon._

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js  
- **Frontend:** EJS, HTML, CSS  
- **Database:** MongoDB  
- **Authentication:** Sessions (or JWT if you used)  
- **File Uploads:** Multer + Cloudinary (if used)  
- **Tools:** Nodemon, Git, GitHub  

---


## ⚙️ Installation & Setup

### 1️⃣ Clone the Repo
```bash
git clone https://github.com/Riteshconnect/Wanderlust_new_project.git
cd Wanderlust_new_project
```

### 2️⃣ Install Dependencies
```bash
npm install
```
### 4️⃣ Start Server (Development)
```bash
npm run dev
```

### 5️⃣ Visit in Browser  
```
http://localhost:5000
```

---

## 📡 Features

### ✔ User Features
- Sign up / Login  
- Browse all listings  
- View listing details  
- Add new listings  
- Edit existing listings  
- Delete listings  
- Add reviews  
- Edit/Delete reviews  

### ✔ Admin / Owner Features
- Manage all owned listings  
- Control access through middleware  

### ✔ System Features
- Session-based authentication  
- Image uploads (Cloudinary)  
- Form validation  
- Flash messages  
- Clean EJS UI with layout and partials  

---

## 🧪 Example Routes

### Listings
```
GET    /listings
POST   /listings
GET    /listings/:id
PUT    /listings/:id
DELETE /listings/:id
```

### Users
```
GET    /register
POST   /register
GET    /login
POST   /login
GET    /logout
```

### Reviews
```
POST   /listings/:id/reviews
DELETE /listings/:id/reviews/:reviewId
```

---


## 📝 Future Improvements
- Add advanced search filters (price, location)  
- Integrate payment system (Stripe)  
- Add map view using Mapbox  
- Add booking system  

---

## 👨‍💻 Author
**Ritesh Kumar**  
Backend Developer — Node.js, Express, MongoDB  
GitHub: https://github.com/Riteshconnect  
LinkedIn: www.linkedin.com/in/ritesh-kumar-992334232

  

