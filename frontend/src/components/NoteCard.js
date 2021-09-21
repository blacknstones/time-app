const NoteCard = ({ note }) => {
  return (
    <>
      {Date.now() > Date.parse(note.receiveAt) && 
        <div>
          <p>{note.title}</p>
        </div>
      }
      </>
   
    
  );
};

export default NoteCard;
