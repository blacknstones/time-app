import Note from '../models/noteModel.js';
import nodemailer from 'nodemailer';
// import cron from 'node-cron'

// // Message Options
// const mailOptions = {
//   from: process.env.PERSONAL_EMAIL,
//   to: process.env.PERSONAL_EMAIL,
//   subject: 'You have a new Note to Self',
//   text: 'Open the link when it is eventually deployed to see your note',
// }

// // Transport configuration
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.PERSONAL_EMAIL,
//     pass: process.env.PERSONAL_PASSWORD,
//   }
// })

// // Send email
// transporter.sendMail(mailOptions, (err, info) => {
//     if (err) {
//     console.log(err);
//     } else {
//     console.log('Email sent: ', info.response);
//     }
// })

// cron.schedule('* * * * * *', () => {
//     console.log('email sent');
//     // // send email
//     // transporter.sendMail(mailOptions, (err, info) => {
//     //     if (err) {
//     //     console.log(err);
//     //     } else {
//     //     console.log('Email sent: ', info.response);
//     //     }
//     // })
// }) 

const createNote = async (req, res) => {
    // Message Options
    const mailOptions = {
        from: process.env.PERSONAL_EMAIL,
        to: process.env.PERSONAL_EMAIL,
        subject: 'You have a new Note to Self',
        text: `Your note will be visible on the ${req.body.receiveAt} when it is eventually deployed to to whatever website. Only then can you see your note`,
    }
    
    // Transport configuration
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.PERSONAL_EMAIL,
        pass: process.env.PERSONAL_PASSWORD,
        }
    })

    try {
        console.log(req.body);
        const note = new Note({
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            receiveAt: req.body.receiveAt,
            opened: req.body.opened
        })
        // // Send email
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
            console.log(err);
            } else {
            console.log('Email sent: ', info.response);
            }
        })

        const newNote = await note.save();
        const notes = await Note.find();

        // schedule (second, minute, hour, day of month, month, day of week, OPTIONAL YEAR)
        // const year = req.body.receiveAtArray[0];
        // const month = req.body.receiveAtArray[1];
        // const day = req.body.receiveAtArray[2];
        // const hour = req.body.receiveAtArray[3];
        // const minute = req.body.receiveAtArray[4];
        // console.log('year:', year, 'month:', month, 'day:', day, 'hour:', hour, 'minute:', minute); 

        res.status(201).json({
            message: 'New note created',
            note: newNote,
            notes: notes,
        })

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