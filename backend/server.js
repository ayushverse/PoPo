const { createServer } = require('http');
const { Server } = require('socket.io');

const hostname = 'localhost';
const port = parseInt(process.env.PORT || '3001', 10);

const httpServer = createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', timestamp: Date.now() }));
  } else {
    res.writeHead(200);
    res.end('Socket.io server running');
  }
});

const io = new Server(httpServer, {
  cors: {
    origin: process.env.NODE_ENV === "production"
      ? [process.env.FRONTEND_URL]
      : ["http://localhost:3000", "http://localhost:3002"],
    methods: ["GET", "POST"],
    credentials: true
  }
});

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).emit('user-connected', userId);
  });

  socket.on('disconnecting', () => {
    const rooms = [...socket.rooms];
    rooms.forEach((roomId) => {
      socket.to(roomId).emit('user-disconnected', socket.id);
    });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });

  socket.on('offer', (data) => {
    console.log(`[OFFER] Received from ${data.from}, forwarding to ${data.to}`);
    socket.to(data.to).emit('offer', data);
  });

  socket.on('answer', (data) => {
    console.log(`[ANSWER] Received from ${data.from}, forwarding to ${data.to}`);
    socket.to(data.to).emit('answer', data);
  });

  socket.on('ice-candidate', (data) => {
    console.log(`[ICE] Received from ${data.from}, forwarding to ${data.to}`);
    socket.to(data.to).emit('ice-candidate', data);
  });

  socket.on('chat-message', (data) => {
    console.log(`[CHAT] Message from ${data.userId} in room ${data.roomId}`);
    socket.to(data.roomId).emit('chat-message', data);
  });
});

httpServer.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Socket server ready on http://${hostname}:${port}`);

  if (process.env.NODE_ENV === 'production' && process.env.BACKEND_URL) {
    setInterval(() => {
      fetch(`${process.env.BACKEND_URL}/health`)
        .then(res => console.log('[KEEP-ALIVE] Ping successful'))
        .catch(err => console.error('[KEEP-ALIVE] Ping failed:', err.message));
    }, 10 * 60 * 1000); // Every 10 minutes it will ping an check for health (heartbeating)
  }
});
