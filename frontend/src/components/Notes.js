//import { useNoteAPI } from "./notesContext/notesContext";
import { useEffect, useContext, useState } from 'react';
import { NotesContext } from '../notesContext/notesContext';
import NoteCard from './NoteCard';

const Notes = () => {
  //const {data, isLoading} = useNoteAPI();
  const { notes, isLoading } = useContext(NotesContext);
  const [unreadNotes, setUnreadNotes] = useState(0);

  useEffect(() => {
    console.log('at home page', notes);
    if (notes.length > 0) {
      const unreadNotesLength = notes.filter(
        note => Date.now() < Date.parse(note.receiveAt)
      );
      // .length();
      console.log('unreadnoteslength', unreadNotesLength);
      setUnreadNotes(unreadNotesLength);
    /*  const test =  notes.reduce((i, acc) => {
        if (Date.now() < Date.parse(i.receiveAt)) {
          acc++;
        }
    }, 0);
    console.log('test value', test); */
    }
  }, [notes]);

  useEffect(() => {
    console.log('isLoading', isLoading);
  }, [isLoading]);

  return (
    <div>
      <p>Your future notes</p>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>{unreadNotes} notes</p>
          {notes && notes.map((note, i) => <NoteCard key={i} note={note} />)}
        </div>
      )}
    </div>
  );
};

export default Notes;
