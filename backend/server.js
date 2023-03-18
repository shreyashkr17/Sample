const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

//handle uncaught exceptions
process.on('uncaughtException', err=>{
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to uncaught exception');
    process.exit(1);
})


dotenv.config({path:"backend/config/config.env"})

//connect database
connectDatabase();


const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})

//handle unhandled promise rejections
process.on('unhandledRejection', err=>{
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to unhandled promise rejection');
    server.close(()=>{
        process.exit(1);
    })
});
