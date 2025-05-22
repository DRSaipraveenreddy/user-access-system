# User Access Management System

Full-stack role-based access system built with:

- **Node.js + Express**
- **TypeScript + TypeORM**
- **PostgreSQL**
- **JWT Authentication**

---

## Features

- User Signup & Login
- JWT-based authentication
- Role-based authorization (Employee / Manager / Admin)
- PostgreSQL + TypeORM integration
- RESTful APIs

---

## Folder Structure
backend/
├── src/
│ ├── config/ # TypeORM and DB config
│ ├── controllers/ # Business logic (auth, users)
│ ├── entities/ # Database models (User, etc.)
│ ├── routes/ # API route definitions
│ └── index.ts # Entry point of the server
├── .env.example # Environment variable template
├── package.json
├── tsconfig.json
├── README.md

---

## Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/DRSaipraveenreddy/user-access-system.git
cd user-access-system/backend
### 2. Install Dependencies
npm install

###3. Setup Environment Variables
#Create your .env file from the example:
cp .env.example .env
#Update it with your PostgreSQL credentials:
PORT=5000
JWT_SECRET=supersecretkey
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=sai_praveen
DB_PASSWORD=your_password
DB_DATABASE=user_access_db

###4. Run the Server
npm run dev
###API Endpoints
###POST /api/auth/signup
Registers a new user.

Request Body:
{
  "username": "tejaswini",
  "password": "mypassword",
  "role": "Employee"
}

###POST /api/auth/login
Authenticates a user and returns a token.

Request Body:
{
  "username": "tejaswini",
  "password": "mypassword"
}

###Tech Stack

Node.js
Express.js
TypeScript
PostgreSQL
TypeORM
JWT
bcrypt
