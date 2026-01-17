# PoPo - Podcast Studio

PoPo is a comprehensive podcasting platform designed to streamline the recording and editing process. It features real-time video capabilities, collaborative tools, and AI-powered enhancements to help creators produce high-quality content with ease.

## Features

- **Real-time Studio**: WebRTC-based video and audio recording for seamless remote collaboration.
- **AI Integration**: Powered by Google Gemini to generate show notes, identify smart clips, and assist in editing.
- **Modern UI**: Built with Next.js and Tailwind CSS for a responsive and premium user experience.
- **Backend**: Express.js and Socket.io server for real-time signaling and data management.

## Project Structure

The project is organized into two main distinct parts:

- **frontend/**: The Next.js application containing the UI and client-side logic.
- **backend/**: The Node.js/Express server handling real-time socket connections and API routes.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation & Running

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ayushverse/PoPo.git
   cd PoPo
   ```

2. **Frontend Setup:**
   Navigate to the frontend directory, install dependencies, and start the development server.
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   The frontend will be available at `http://localhost:3000`.

3. **Backend Setup:**
   Open a new terminal, navigate to the backend directory, install dependencies, and start the server.
   ```bash
   cd backend
   npm install
   npm run dev
   ```
   The backend server will typically run on port `3001` or as configured.

## Environment Variables

Create a `.env.local` file in the `frontend` directory for your client-side keys (e.g., Gemini API key).
See `.env.example` (if available) for required variables.

## Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS, Lucide React
- **Backend**: Node.js, Express, Socket.io
- **AI**: Google Gemini API
- **Deployment**: Vercel (Frontend), Render/Heroku (Backend - recommended)

## License

[MIT](LICENSE)
