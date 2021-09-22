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
  };

  const deleteNote = (id) => {
    axios.delete(url, { data: { _id: id} });
    // Should I add something here for a response?
    window.location.reload(true);
  };

  useEffect(() => {
    setIsLoading(true);
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
      createNote,
      deleteNote
    }}>
      {children}
    </NotesContext.Provider>
  );
};
