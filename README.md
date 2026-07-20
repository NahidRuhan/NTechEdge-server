# Product Feedback Board - API Server

The backend REST API for the Product Feedback Board. Built with Express and MongoDB, it provides a robust and strictly layered architecture to manage feedback data securely and efficiently.

## 🏗️ Architecture

This project strictly adheres to a layered architecture for maintainability and scalability:
- **Routes:** Define endpoints and attach middleware (zero business logic).
- **Controllers:** Handle HTTP requests and responses, leveraging a `BaseController`.
- **Services:** Contain the core business rules and validation logic.
- **Repositories:** Encapsulate all database (Mongoose) queries and operations.

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Language:** TypeScript
- **Database:** MongoDB + Mongoose
- **Validation:** Zod
- **Utilities:** CORS, dotenv

## 📡 API Endpoints Reference

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/feedback` | Fetch all feedback (supports `?category=` and `?priority=` query filters) |
| `POST` | `/api/feedback` | Create a new feedback item |
| `PATCH` | `/api/feedback/:id/upvote` | Increase the vote count for a specific item |
| `PATCH` | `/api/feedback/:id/downvote` | Decrease the vote count for a specific item |
| `DELETE` | `/api/feedback/:id` | Delete a specific feedback item |
| `GET` | `/api/health` | API health check endpoint |

## ⚙️ Environment Variables

Create a `.env` file in the root of the `server` directory:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/feedback-board
# Used to configure CORS allowing frontend requests
CLIENT_URL=http://localhost:3000
```

## 🚀 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Seed the database with sample data (optional):
   ```bash
   npx tsx src/seed.ts
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## ☁️ Deployment to Vercel

This Express application can be hosted on Vercel as a Serverless Function.

Ensure you have a `vercel.json` configured in the `server` root to correctly route requests to your entry point (usually `api/index.ts` or `src/app.ts` wrapped for serverless environments). Also, remember to set the `MONGO_URI` and `CLIENT_URL` in the Vercel Environment Variables dashboard.
