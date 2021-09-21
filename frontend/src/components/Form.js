import { useState, useContext } from 'react';
import { NotesContext } from '../notesContext/notesContext';

const Form = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState(undefined);
  const [receiveAt, setReceiveAt] = useState(undefined);

  const { createNote } = useContext(NotesContext);

  const handleSubmit = e => {
    e.preventDefault();
    const note = {
      title,
      content,
      category,
      receiveAt,
      opened: false,
    };
    console.log('note', note);
    createNote(note);
    setTitle('');
    setContent('');
    setCategory('');
    setReceiveAt('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name='title'
          type='text'
          value={title}
          placeholder='title'
          required
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          name='content'
          type='text'
          value={content}
          placeholder='content'
          required
          onChange={e => setContent(e.target.value)}
        />
        <input
          name='category'
          type='text'
          value={category}
          placeholder='category'
          required
          onChange={e => setCategory(e.target.value)}
        />
        <input
          name='receiveAt'
          type='datetime-local'
          value={receiveAt}
          required
          onChange={e => setReceiveAt(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
