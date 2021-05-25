import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";
import React from "react";

/**
 * Creates a note item
 * @param {*} noteItem 
 * @returns A note item
 */
function createNotes(noteItem) {
  return (
    <Note
      key={noteItem.key}
      title={noteItem.title}
      content={noteItem.content}
    />
  )
}

/**
 * The App function
 * @returns the page elements
 */
function App() {
  return (
    <div>
      <Header />
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
