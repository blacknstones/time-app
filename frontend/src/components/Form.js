import { useState, useContext } from 'react';
import { NotesContext } from '../notesContext/notesContext';

const Form = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([])
  const [receiveAt, setReceiveAt] = useState(undefined);

  const { createNote } = useContext(NotesContext);

  const handleSubmit = e => {
    e.preventDefault();
    const note = {
      title,
      content,
      category: categories,
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

  const testFunction = () => {
    console.log('category to add', category);
    if (categories.length > 0) {
      setCategories([...categories, category]);
      setCategory('');
      return;
    }
    setCategories([category]);
    setCategory('');
  }

  return (
    <div>
      <form>
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
          placeholder='category (press enter to add)'
          required
          onChange={e => setCategory(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              testFunction();
            }
          }}
        />
        <input
          name='receiveAt'
          type='datetime-local'
          value={receiveAt}
          required
          onChange={e => setReceiveAt(e.target.value)}
        />
        <button type='button' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
