import { useContext } from 'react';
import { NotesContext } from '../notesContext/notesContext';
import '../styles/notecard.scss'

const NoteCard = ({ note }) => {
  const { deleteNote } = useContext(NotesContext);

  return (
    <>
      {Date.now() > Date.parse(note.receiveAt) && 
        <div className="notecard">
          <h3 className="heading">Title: {note.title}</h3>
          <p>ID: {note._id}</p>
          <p>Content: {note.content}</p>
          <p>Category:</p>
          {note.category.map((category, i) => <p key={i}>{category}</p>)}
          <p>{note.receiveAt}</p>
          <button onClick={() => deleteNote(note._id)}>Delete note</button>
        </div>
      }
      </>
   
    
  );
};

export default NoteCard;
