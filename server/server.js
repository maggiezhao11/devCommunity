const PORT = 3002;
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./db');



const app = express();
const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  secret: 'secret'
}))
//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded())

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



app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));