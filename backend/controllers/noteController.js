import Note from '../models/noteModel.js';

const createNote = async (req, res) => {
    try {
        console.log(req.body);
        const note = new Note({
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            receiveAt: req.body.receiveAt
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

export {createNote};