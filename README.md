
# 💰 Finance Backend API

<p align="center">
  A secure and scalable backend system for managing financial records with authentication and role-based access control.
</p>

---

## 🚀 Overview

This project is a **RESTful API** built using **Node.js, Express, and MongoDB** that allows users to manage financial data securely.

It implements **JWT-based authentication** and **Role-Based Access Control (RBAC)** to ensure proper authorization across different user roles.

---

## ✨ Features

* 🔐 **JWT Authentication**

  * Secure login system
  * Token-based request validation

* 👥 **Role-Based Access Control**

  * Admin → Full access
  * Viewer → Read-only access

* 📊 **Financial Records Management**

  * Create, Read, Update, Delete operations

* 📄 **Pagination**

  * Efficient data fetching for large datasets

* ✅ **Validation**

  * Enforced using Mongoose schema rules

* 🛡 **Protected Routes**

  * Middleware-based authentication & authorization

* 🧪 **API Testing**

  * Tested using Postman with multiple roles

---

## 🛠 Tech Stack

| Technology | Purpose             |
| ---------- | ------------------- |
| Node.js    | Runtime environment |
| Express.js | Backend framework   |
| MongoDB    | Database            |
| Mongoose   | ODM                 |
| JWT        | Authentication      |

---

## 📂 Project Structure

```bash
src/
 ├── controllers/    # Business logic
 ├── models/         # Database schemas
 ├── routes/         # API routes
 ├── middleware/     # Auth & role control
```

---

## 🔑 Authentication Flow

1. User logs in with credentials
2. Server generates a JWT token
3. Client sends token in headers:

```
Authorization: Bearer <token>
```

4. Middleware verifies token and extracts user role

---

## 🛡 Role-Based Access Control

| Role   | Access                              |
| ------ | ----------------------------------- |
| Admin  | Full (Create, Read, Update, Delete) |
| Viewer | Read-only                           |

---

## 📡 API Endpoints

### 🔐 Auth

* `POST /auth/login` → Login user & get token

### 👤 Users

* `POST /users` → Create user

### 📊 Records

* `GET /records` → Get all records (with pagination)
* `POST /records` → Create record (**Admin only**)
* `GET /records/summary` → Summary (**Restricted**)
* `DELETE /records/:id` → Delete record (**Admin only**)

---

## 📄 Pagination Example

```
GET /records?page=1&limit=10
```

---

## 🧪 Testing Strategy

APIs were tested using Postman by simulating:

* ✅ Admin user (full access)
* ❌ Viewer user (restricted access)

This ensured proper enforcement of authorization rules.

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone <https://github.com/Ragendu02/finance-backend-clean>
cd finance-backend-clean
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Create Environment File

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

---

### 4. Run Server

```bash
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

## 🎯 Key Highlights

* Clean and modular architecture
* Secure authentication system
* Role-based authorization implemented
* Real-world backend design patterns

---

## 🚀 Future Improvements
* 📊 Advanced Analytics & Filtering
* 📱 Frontend Integration (Flutter)

---

## 👨‍💻 Author

**Ragendu V S**

---


