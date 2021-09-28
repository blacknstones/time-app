import { useContext } from 'react';
import { NotesContext } from '../notesContext/notesContext';
import '../styles/notecard.scss'
import { motion } from 'framer-motion';

const NoteCard = ({ note }) => {
  const { deleteNote } = useContext(NotesContext);
  console.log('in notecard. Date to receive:', note.receiveAt, 'Parsed date:', Date.parse(note.receiveAt), 'Date now', Date.now());
  const difference = Date.now() - Date.parse(note.receiveAt);
  console.log('the difference:', difference);

  return (
    <>
      {Date.now() > Date.parse(note.receiveAt) && 
        <div className="notecard">
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <p>Category:</p>
          {note.category.map((category, i) => <p key={i}>{category}</p>)}
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
