import  express from 'express';
import { connectDB } from './database.js';
import noteRouter from './routes/noteRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();


const app = express();
const PORT = 4000;


connectDB();


app.use(express.json());
app.use(cors());
app.use(noteRouter);


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
