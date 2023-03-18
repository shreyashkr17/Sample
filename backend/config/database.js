const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
        console.log(`Database connected successfully with server: ${process.env.DB_URI}`);
    })
}

module.exports = connectDatabase;