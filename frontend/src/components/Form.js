import { useState, useContext } from 'react';
import { NotesContext } from '../notesContext/notesContext';
import '../styles/form.scss';

const Form = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([])
  const [receiveAt, setReceiveAt] = useState('');

  const { createNote } = useContext(NotesContext);

  const handleSubmit = e => {
    e.preventDefault();
    // const receiveAtArray = receiveAt.split(/[\-:T]/g);
    const note = {
      title,
      content,
      category: categories,
      receiveAt,
      opened: false,
      // receiveAtArray: receiveAtArray
    };
    console.log('note', note);
    createNote(note);
    setTitle('');
    setContent('');
    setCategory('');
    setReceiveAt('');
  };

  const addCategory = () => {
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
    <div className="form">
      <form className="form__form">
        <input
          className="form__input--highlight"
          name='title'
          type='text'
          value={title}
          placeholder='title'
          required
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          className="form__input--highlight"
          name='content'
          type='text'
          value={content}
          placeholder='content'
          required
          onChange={e => setContent(e.target.value)}
        />
        <input
          className="form__input--highlight"
          name='category'
          type='text'
          value={category}
          placeholder='category (press enter to add)'
          required
          onChange={e => setCategory(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addCategory();
            }
          }}
        />
        {categories.length > 0 && <p>{categories.join(', ')}</p>}
        <input
          className="form__input--highlight"
          name='receiveAt'
          type='datetime-local'
          value={receiveAt}
          required
          onChange={e => setReceiveAt(e.target.value)}
        />
        <button className="form__btn" type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
