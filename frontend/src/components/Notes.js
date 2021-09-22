import { useEffect, useContext, useState } from 'react';
import { NotesContext } from '../notesContext/notesContext';
import NoteCard from './NoteCard';
import '../styles/notes.scss';

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

  return (
    <div className="notes">
      <h1 className="notes__title">Notes to self</h1>
      <h3 className="notes__total">Your future notes : {unreadNotes}</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="notes__container">
          {notes && notes.map((note, i) => <NoteCard key={i} note={note} />)}
        </div>
      )}
    </div>
  );
};

export default Notes;
