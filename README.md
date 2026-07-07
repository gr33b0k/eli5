# ELI5

A modern chat application for learning by asking questions and getting simple explanations.

You can register, log in, create chat sessions, and keep message history while the assistant responds using AI-powered explanations.

## Features

- User authentication: register, login, logout
- Chat sessions with message history
- AI explanations powered by OpenRouter
- Simple conversational UI with user and assistant messages
- Zustand state management and animated UI components

## Tech

- React
- Vite
- React Router
- Zustand
- Express
- Prisma
- OpenRouter API

## Run locally

1. Clone the repo:
   ```sh
   git clone https://github.com/gr33b0k/eli5.git
   ```
2. Open the project:

   ```sh
   cd eli5
   ```

3. Install dependencies:

   ```sh
   cd server && npm install
   cd ../client && npm install
   ```

4. Configure the backend:
   - Create a `.env` file inside `server/`
   - Add `DATABASE_URL`, `OPENROUTER_API_KEY` and `JWT_SECRET`

5. Generate Prisma client:

   ```sh
   cd server
   npx prisma generate
   ```

6. Start the application:

   ```sh
   cd ..
   npm run dev
   ```

7. Open the app:
   ```sh
   http://localhost:5173
   ```
