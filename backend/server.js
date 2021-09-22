import  express from 'express';
import { connectDB } from './database.js';
import noteRouter from './routes/noteRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';
import nodemailer from 'nodemailer';
import cron from 'node-cron'

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

// // Message Options
// const mailOptions = {
//   from: process.env.PERSONAL_EMAIL,
//   to: process.env.PERSONAL_EMAIL,
//   subject: 'You have a new note in the Time App',
//   text: 'Open your Time App to view the note you sent to yourself',
// }

// // Transport configuration
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.PERSONAL_EMAIL,
//     pass: process.env.PERSONAL_PASSWORD,
//   }
// })

// // send email
// transporter.sendMail(mailOptions, (err, info) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Email sent: ', info.response);
//   }
// })

// schedule
cron.schedule('1,2 * * * * *', () => {
  console.log('email sent');
})