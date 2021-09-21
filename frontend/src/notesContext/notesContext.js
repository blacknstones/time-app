import { useContext, createContext, useEffect, useState } from 'react';
import axios from 'axios';

const notesContext = createContext();

const NotesContextProvider = ({ children }) => {
  const [data, setData] = useState([{title: 'fake note'}]);
  const [isLoading, setIsLoading] = useState(false);

{/* useEffect(() => {
    let url = '/';
    axios
      .get(url)
      .then(response => {
        setData(response.data.notes);
        setIsLoading(false);
        console.log(response.data.notes);
      })
      .catch(error => console.log(error));
  }, []); */}


  return (
    <NotesContextProvider value={{ data, isLoading }}>
      {children}
    </NotesContextProvider>
  );
};

export default NotesContextProvider;

export const useNoteAPI = () => {
  const context = useContext(notesContext);
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
};
