import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import React, { useState } from "react";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function expand() {
    setExpanded(true);
  }
  
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }


  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            placeholder="Title"
            value={note.title}
          />
        )}

        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          placeholder="Take a note..."
          rows={isExpanded ? 5 : 1}
          value={note.content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
