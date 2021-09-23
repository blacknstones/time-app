import { useContext } from 'react';
import { NotesContext } from '../notesContext/notesContext';
import '../styles/notecard.scss'
import { motion } from 'framer-motion';

const NoteCard = ({ note }) => {
  const { deleteNote } = useContext(NotesContext);

  return (
    <>
      {Date.now() > Date.parse(note.receiveAt) && 
        <div className="notecard">
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <p>Category:</p>
          {note.category.map((category, i) => <p key={i}>{category}</p>)}
          <p>{note.receiveAt}</p>
          <motion.button
            className="notecard__btn"
            onClick={() => deleteNote(note._id)}
            whileHover={{
              scale: 1.1
            }}
            >Delete note
          </motion.button>
        </div>
      }
      </>
  );
};

export default NoteCard;
