import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoute from './routes/user.route.js'
import userAuth from './routes/auth.routes.js'

const app = express();
app.use(express.json())
dotenv.config();


mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("mongo db is connect ");
  })
  .catch(() => {
    console.log();
  });
//   mid

app.listen(3000, () => {
  console.log("server is running ");
});

app.use('/api/user', userRoute)
app.use('/api/auth' , userAuth)

//middleware handle error 
app.use((err,req,res,next) =>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})


