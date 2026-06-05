# Portfolio Monorepo

This repository uses a `client/` and `server/` layout:

- `client/` contains the React + Vite frontend.
- `server/` contains the Express backend.

## Frontend

```bash
cd client
npm install
npm run dev
```

## Backend

```bash
cd server
npm install
node server.js
```

The backend listens on port `5000` and exposes the `/contact` endpoint used by the portfolio form.
