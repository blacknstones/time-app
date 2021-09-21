// import './App.css';
import HomePage from './components/HomePage';
import NotesContextProvider from './notesContext/notesContext';

const App = () => {
  return (
    <div className='App'>
      <NotesContextProvider>
        <header className='App-header'>
          <HomePage />
        </header>
      </NotesContextProvider>
    </div>
  );
};

export default App;
