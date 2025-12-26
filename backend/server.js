const { createServer } = require('http');
const { Server } = require('socket.io');

const hostname = 'localhost';
const port = parseInt(process.env.PORT || '3001', 10);

const httpServer = createServer((req, res) => {
  res.writeHead(200);
  res.end('Socket.io server running');
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
    socket.to(data.to).emit('offer', data);
  });

  socket.on('answer', (data) => {
    socket.to(data.to).emit('answer', data);
  });

  socket.on('ice-candidate', (data) => {
    socket.to(data.to).emit('ice-candidate', data);
  });
});

httpServer.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Socket server ready on http://${hostname}:${port}`);
});
