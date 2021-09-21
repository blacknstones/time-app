import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const url = 'http://localhost:4000';

export const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState( [] );
  const [isLoading, setIsLoading] = useState(true);

  const createNote = (note) => {
    setIsLoading(true);
    axios.post(url, note).then(response => {
      console.log(response.data);
      setNotes(response.data.notes);
      setIsLoading(false);
    })
  }

  useEffect(() => {
  
    // setIsLoading(true);
    axios
      .get(url)
      .then(response => {
        setNotes(response.data.notes);
        setIsLoading(false);
        console.log('in context', response.data.notes);
      })
      .catch(error => console.log(error));
  }, []);


  return (
    <NotesContext.Provider value={{
      notes,
      isLoading,
      createNote
    }}>
      {children}
    </NotesContext.Provider>
  );
};

// export default NotesContextProvider;

// export const useNoteAPI = () => {
//   const context = useContext(NotesContext);
//   if (context === undefined) {
//     throw new Error('Context must be used within a Provider');
//   }
//   return context;
// };
