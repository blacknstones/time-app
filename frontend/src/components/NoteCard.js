import { useContext } from 'react';
import { NotesContext } from '../notesContext/notesContext';
import '../styles/notecard.scss'
import { motion } from 'framer-motion';

const NoteCard = ({ note }) => {
  const { deleteNote } = useContext(NotesContext);

  return (
    <>
      {Date.now() > Date.parse(note.receiveAt) && 
        <motion.div
          className="notecard"
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ delay: 0.25 }} 
        >
          <h3>{note.title}</h3>
          {/* <p>ID: {note._id}</p> */}
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
        </motion.div>
      }
      </>
   
    
  );
};

export default NoteCard;
