const PORT = 3002;
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { Server } = require("socket.io");
const jwt = require("jsonwebtoken");
const db = require('./db');

const app = express();
const http = require("http");
const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  secret: 'secret'
}))
//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({origin: true, credentials: true}));
app.use(express.urlencoded())


const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin:"http://localhost:3005",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`user is connected: ${socket.id}`);
  
  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`user with ID: ${socket.id} joined room: ${data}`);

    socket.on("send_message", (msg) => {
      console.log(`received: ${msg}`)
      socket.emit("receive_message", msg);
      socket.to(data).emit("receive_message", msg);
    });


  });

  socket.on("send_message", (msg) => {
    console.log(`received: ${msg}`)
    //send message to everyone in all rooms as a back up plan
    socket.emit("receive_message", msg);

    socket.send(msg);
    // socket.to(data.room).emit("receive_message", msg);

  });


  socket.on("disconnect", () => {
    console.log(`user is disconnected: ${socket.id}`)
  });

});


const posts = require('./routes/posts');
const users = require('./routes/users')
const groups = require('./routes/groups');
const events = require('./routes/events');
const login = require('./routes/login');

app.use('/posts', posts(db));
app.use('/users', users(db));
app.use('/groups', groups(db));
app.use('/events', events(db));
app.use('/login', login(db));


app.get("/", (req, res) => {
  
    res.send("ok");
    //res.json(data);
  });



// app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));