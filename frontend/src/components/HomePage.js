//import { useNoteAPI } from "./notesContext/notesContext";
import { useEffect } from 'react';

const HomePage = () => {
    //const {data, isLoading} = useNoteAPI();

    useEffect(() => {
       console.log('at home page')
    }, [])
    
    return (
        <>
        <p>hallo</p>
       {/*  <div>
            {isLoading && <p>Loading...</p>}
            {data && data.map(note => <p>{note.title}</p>)}
        </div> */}
        </>
    )
}

export default HomePage
