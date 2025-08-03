import express from 'express';
import mongoose from 'mongoose';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user',users);
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});