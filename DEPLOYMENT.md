# Deployment Guide

This guide describes how to deploy the **PoPo** application. Since the project is a monorepo containing both a `frontend` (Next.js) and `backend` (Node.js/Express), they will be deployed separately.

## 1. Backend Deployment (Render.com)

We recommend deploying the backend first so you have the API URL ready for the frontend configuration. **Render** is a great choice for Node.js services.

1.  **Create a New Web Service on Render:**
    -   Connect your GitHub repository.
    -   Select the **PoPo** repo.

2.  **Configure the Service:**
    -   **Name:** `popo-backend` (or similar)
    -   **Root Directory:** `backend` (Important!)
    -   **Environment:** `Node`
    -   **Build Command:** `npm install`
    -   **Start Command:** `npm start`

3.  **Environment Variables:**
    Add the following environment variables in the Render dashboard:
    -   `NODE_ENV`: `production`
    -   `FRONTEND_URL`: `https://your-frontend-app.vercel.app` (You can update this *after* deploying the frontend, initially you can set it to `*` or a placeholder, but for security, update it once frontend is live).

4.  **Deploy:**
    -   Click **Create Web Service**.
    -   Wait for the deployment to finish.
    -   **Copy the Service URL** (e.g., `https://popo-backend.onrender.com`). You will need this for the frontend.

---

## 2. Frontend Deployment (Vercel)

**Vercel** is the creators of Next.js and the best place to host it.

1.  **Create a New Project on Vercel:**
    -   Go to your Vercel dashboard and click **Add New...** > **Project**.
    -   Import the **PoPo** repository.

2.  **Configure Project:**
    -   **Framework Preset:** Next.js (should be auto-detected).
    -   **Root Directory:** Click "Edit" and select `frontend`. (Important!)

3.  **Environment Variables:**
    Expand the "Environment Variables" section and add:
    -   `NEXT_PUBLIC_API_URL`: Paste your **Backend Service URL** from step 1 (e.g., `https://popo-backend.onrender.com`).
    *Note: Ensure you don't have a trailing slash if your code appends paths manually, or check your specific implementation.*

4.  **Deploy:**
    -   Click **Deploy**.
    -   Vercel will build and deploy your frontend.
    -   Once done, you will get a live URL (e.g., `https://popo-frontend.vercel.app`).

---

## 3. Final Configuration

1.  **Update Backend CORS:**
    -   Go back to your **Render** dashboard for the backend.
    -   Update the `FRONTEND_URL` environment variable to match your *actual* Vercel deployment URL (e.g., `https://popo-frontend.vercel.app`).
    -   Render will automatically redeploy the backend with the new configuration.

2.  **Verify:**
    -   Open your Vercel URL.
    -   Check the browser console/network tab to ensure the frontend is successfully connecting to the backend socket server (no CORS errors).

## Troubleshooting

-   **CORS Errors:** Double-check that `FRONTEND_URL` on the backend matches the Vercel URL exactly (protocol `https://` and no trailing slash usually).
-   **Connection Refused:** Ensure the backend is running and `NEXT_PUBLIC_API_URL` is correct.
-   **Dependencies:** If builds fail, check that `backend/package.json` and `frontend/package.json` are valid and all dependencies are listed.
