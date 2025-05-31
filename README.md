
---

# Hotel Management System - Backend API

A backend RESTful API for a basic Hotel Management System built with Node.js, Express.js, and MongoDB (Mongoose).
Supports user authentication, hotel & room management, and booking functionalities with role-based access control (admin & customer).

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/vishnu-280804/hotel-management.git
cd hotel-management
```

2. **Install dependencies**

```bash
npm install
```


3. **Start the development server**

```bash
node index.js
```

Server will run on `http://localhost:5000`.

---

## API Documentation

### Authentication

| Endpoint             | Method | Description         | Access | Request Body                                                            |
| -------------------- | ------ | ------------------- | ------ | ----------------------------------------------------------------------- |
| `/api/auth/register` | POST   | Register a new user | Public | `{ "name", "email", "password", "role" }` (role: "admin" or "customer") |
| `/api/auth/login`    | POST   | User login          | Public | `{ "email", "password" }`                                               |

---

### Hotels

| Endpoint          | Method | Description                          | Access     | Request Body                                     |
| ----------------- | ------ | ------------------------------------ | ---------- | ------------------------------------------------ |
| `/api/hotels`     | GET    | Get all hotels (pagination & search) | Public     | Optional query params: `page`, `limit`, `search` |
| `/api/hotels`     | POST   | Create a new hotel                   | Admin only | `{ "name", "location", "description" }`          |

---

### Rooms

| Endpoint                     | Method | Description                | Access     | Request Body                          |
| ---------------------------- | ------ | -------------------------- | ---------- | ------------------------------------- |
| `/api/rooms/:id`             | GET    | Get room details           | Public     |                                       |
| `/api/hotels/:hotelId/rooms` | POST   | Add a new room to a hotel  | Admin only | `{ "type", "price", "availability" }` |

---

### Bookings

| Endpoint            | Method | Description                 | Access                           | Request Body                          |
| ------------------- | ------ | --------------------------- | -------------------------------- | ------------------------------------- |
| `/api/bookings`     | GET    | Get all bookings            | Admin only                       |                                       |
| `/api/bookings`     | POST   | Book a room                 | Customer only                    | `{ "roomId", "checkIn", "checkOut" }` |
| `/api/bookings/:id` | DELETE | Cancel a booking            | Customer (own bookings) or Admin |                                       |

---

## Features

* JWT-based user authentication
* Role-based access control (admin, customer)
* Hotel & room CRUD operations by admin
* Room availability check before booking to prevent double-booking
* Booking management for customers and admins
* Input validation and error handling

---

## Folder Structure

```
/models       # Mongoose schemas
/controllers  # Route controllers
/routes       # Express route definitions
/middleware   # Authentication, authorization, error handling
/config       # Configuration and environment variables
index.js     # Entry point
```

---


