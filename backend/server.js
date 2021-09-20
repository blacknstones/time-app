import  express from 'express';
import { connectDB } from './database.js';
import noteRouter from './routes/noteRoutes.js';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const PORT = 3000;

connectDB();


app.use(express.json());
app.use(noteRouter);



app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
