import pkg from 'mongoose';
const {model, Schema} = pkg;

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        type: [String],
        required: false,
    },
    receiveAt: {
        type: Date,
        required: true,
    }   
},{ timestamps: true })

export default model('Note', NoteSchema);