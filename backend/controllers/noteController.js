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
        const notes = await Note.find();

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