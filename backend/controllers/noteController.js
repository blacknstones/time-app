import Note from '../models/noteModel.js';
import nodemailer from 'nodemailer';
import cron from 'node-cron'

// Message Options
const mailOptions = {
  from: process.env.PERSONAL_EMAIL,
  to: process.env.PERSONAL_EMAIL,
  subject: 'You have a new note in the Time App',
  text: 'Open your Time App to view the note you sent to yourself',
}

// Transport configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.PERSONAL_EMAIL,
    pass: process.env.PERSONAL_PASSWORD,
  }
})

// // send email
// transporter.sendMail(mailOptions, (err, info) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Email sent: ', info.response);
//   }
// })

// schedule (seconds, minutes, hours, day of month, month, day of week, OPTIONAL YEAR)
// cron.schedule('* * * * * *', () => {
//     console.log('email sent');
//   })

const createNote = async (req, res) => {
    try {
        console.log(req.body);
        const note = new Note({
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            receiveAt: req.body.receiveAt,
            opened: req.body.opened
        })

        console.log('NOTE', req.body);

        // const newNote = await note.save();
        // const notes = await Note.find();

        // res.status(201).json({
        //     message: 'New note created',
        //     note: newNote,
        //     notes: notes,
        // })

    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}

const deleteNote = async (req, res) => {
    try {
        // console.log('in noteController, id to delete:', req.body._id);
        await Note.deleteOne({ _id: req.body._id });
        res.status(200);
    } catch (err) {
        res.status(500).send(err);
    }
}

const getNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(201).json({
            notes
        })

    } catch (err) {
        res.status(500).send(err);
    }
}

export {createNote, deleteNote, getNotes};