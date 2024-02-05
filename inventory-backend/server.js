import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();
import connectDb from './db';


const server = express();
const PORT = process.env.PORT || 6060

// middleware
server.use(morgan('dev'));
server.use(cors());
server.use(express.json());
server.use(LaboratoryRoute)









server.listen(PORT, (req, res) =>  {
 connectDb();
 console.log(`server is running on port${PORT}`)
})
