import { useEffect, useContext, useState } from 'react';
import { NotesContext } from '../notesContext/notesContext';
import NoteCard from './NoteCard';

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
    <div>
      <h1>Notes to self</h1>
      <p>Your future notes : {unreadNotes}</p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {notes && notes.map((note, i) => <NoteCard key={i} note={note} />)}
        </div>
      )}
    </div>
  );
};

export default Notes;
