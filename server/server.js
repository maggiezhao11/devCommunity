const PORT = 3002;
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(morgan("dev"));
app.use(cors());

const posts = require('./routes/posts');

app.use('/devcommunity', posts());

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));