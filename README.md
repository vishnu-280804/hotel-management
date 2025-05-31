
---

# Hotel Management System - Backend API

A backend RESTful API for a basic Hotel Management System built with Node.js, Express.js, and MongoDB (Mongoose).
Supports user authentication, hotel & room management, and booking functionalities with role-based access control (admin & customer).

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/vishnu-280804/hotel-management.git
cd hotel-management-backend
```

2. **Install dependencies**

```bash
npm install
```


3. **Start the development server**

```bash
npm run dev
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
| `/api/hotels/:id` | GET    | Get hotel details                    | Public     |                                                  |
| `/api/hotels`     | POST   | Create a new hotel                   | Admin only | `{ "name", "location", "description" }`          |
| `/api/hotels/:id` | PUT    | Update hotel details                 | Admin only | Partial or full hotel data                       |
| `/api/hotels/:id` | DELETE | Delete a hotel                       | Admin only |                                                  |

---

### Rooms

| Endpoint                     | Method | Description                | Access     | Request Body                          |
| ---------------------------- | ------ | -------------------------- | ---------- | ------------------------------------- |
| `/api/hotels/:hotelId/rooms` | GET    | List all rooms for a hotel | Public     |                                       |
| `/api/rooms/:id`             | GET    | Get room details           | Public     |                                       |
| `/api/hotels/:hotelId/rooms` | POST   | Add a new room to a hotel  | Admin only | `{ "type", "price", "availability" }` |
| `/api/rooms/:id`             | PUT    | Update room details        | Admin only | Partial or full room data             |
| `/api/rooms/:id`             | DELETE | Delete a room              | Admin only |                                       |

---

### Bookings

| Endpoint            | Method | Description                 | Access                           | Request Body                          |
| ------------------- | ------ | --------------------------- | -------------------------------- | ------------------------------------- |
| `/api/bookings`     | GET    | Get all bookings            | Admin only                       |                                       |
| `/api/bookings/my`  | GET    | Get current user’s bookings | Customer only                    |                                       |
| `/api/bookings`     | POST   | Book a room                 | Customer only                    | `{ "roomId", "checkIn", "checkOut" }` |
| `/api/bookings/:id` | DELETE | Cancel a booking            | Customer (own bookings) or Admin |                                       |

---

## Authentication & Authorization

* Use `Authorization: Bearer <token>` header to access protected routes.
* Role-based middleware restricts certain endpoints to admin or customer roles.

---

## Features

* JWT-based user authentication
* Role-based access control (admin, customer)
* Hotel & room CRUD operations by admin
* Room availability check before booking to prevent double-booking
* Booking management for customers and admins
* Input validation and error handling
* Optional bonus features like hotel search, room filters, pagination, and email notifications

---

## Folder Structure

```
/models       # Mongoose schemas
/controllers  # Route controllers
/routes       # Express route definitions
/middleware   # Authentication, authorization, error handling
/config       # Configuration and environment variables
server.js     # Entry point
```

---

Feel free to copy-paste this directly into a file named `README.md` in your project root folder.
If you want me to add or customize anything else, just ask!
