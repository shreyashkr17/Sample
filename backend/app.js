const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/error');

app.use(express.json());
app.use(cookieParser());

const user = require('./routes/userRoute');
app.use("/api/v1", user);

const disease = require('./routes/diseaseRoute');
app.use("/api/v1", disease);

app.use(errorMiddleware);

module.exports = app;