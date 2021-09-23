import { useEffect, useContext, useState } from 'react';
import { NotesContext } from '../notesContext/notesContext';
import NoteCard from './NoteCard';
import '../styles/notes.scss';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Notes = () => {
  const { notes, isLoading } = useContext(NotesContext);
  const [unreadNotes, setUnreadNotes] = useState(0);

  useEffect(() => {
    console.log('at home page', notes);
    if (notes.length > 0) {
      const unreadNotesLength = notes.filter(note => Date.now() < Date.parse(note.receiveAt)).length;
      setUnreadNotes(unreadNotesLength);
    }
  }, [notes]);

  useEffect(() => {
    console.log('isLoading', isLoading);
  }, [isLoading]);

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const childVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="notes">
      <h1 className="notes__title">Notes to self</h1>
      <h3 className="notes__total">Your future notes : <CountUp end={unreadNotes} duration={2} /></h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="notes__container">
          {notes && notes.map((note, i) => <motion.div variants={childVariants}><NoteCard key={i} note={note} /></motion.div>)}
        </motion.div>
      )}
    </div>
  );
};

export default Notes;
