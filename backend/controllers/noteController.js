import Note from '../models/noteModel.js';

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

        const newNote = await note.save();

        res.status(201).json({
            message: 'New note created',
            note: newNote
        })

    } catch(err) {
        console.log(err);
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

export {createNote, getNotes};