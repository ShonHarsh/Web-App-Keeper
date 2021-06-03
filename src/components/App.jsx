import CreateArea from "./CreateArea";
import DefaultNoteFile from "../DefaultNoteFile";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import React, { useState } from "react";

/**
 * The App function
 * @returns the page elements
 */
function App() {
  const [notes, setNotes] = useState([]);
  const [notesDefault, setNotesDefault] = useState(DefaultNoteFile);

  function addNote(newNote) {
    //check for blank note
    if (newNote.title)
    {
      setNotes(prevNotes => {
        return [...prevNotes, newNote];
      })  
    }
  }

  function deleteNoteDefault(id) {
    setNotesDefault(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      
      {/* {notesDefault.map((noteItem, index) => {
      return (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNoteDefault}
        />
      );
    })} */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
