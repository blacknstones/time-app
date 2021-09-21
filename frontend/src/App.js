// import './App.css';
import Notes from './components/Notes';
import { NotesContextProvider } from './notesContext/notesContext';
import Form from './components/Form';

const App = () => {
  return (
    <NotesContextProvider>
        <div className='App'>
          <header className='App-header'>
            <Notes />
          </header>
          <Form />
        </div>
      </NotesContextProvider>
  );
};

export default App;
