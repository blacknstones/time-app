const NoteCard = ({ note }) => {
  return (
    <>
      {Date.now() > Date.parse(note.receiveAt) && 
        <div>
          <h3>Title: {note.title}</h3>
          <p>Content: {note.content}</p>
          <p>Category:</p>
          {note.category.map((category, i) => <p key={i}>{category}</p>)}
          <p>{note.receiveAt}</p>
          <button>Delete note</button>
        </div>
      }
      </>
   
    
  );
};

export default NoteCard;
