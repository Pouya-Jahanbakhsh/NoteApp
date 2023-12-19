import React, { useState } from "react"
import './App.css';
import AddNewNote from './components/AddNewNote';
import NoteList from './components/NoteList';
import NoteStatus from "./components/NoteStatus";

function App() {

  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);

    // "prevNotes" can be everything shuch as "ali"! , it Shows the previous values ​​of the array notes

    // "[...prevNotes , newNote]" works like array.append(newNote) in python 
  };

  const handleDeleteNote = (id) => {
    // setNotes( notes.filter( n => n.id !== id )); 
    // n can be everything - it shows each of the notes

    setNotes(prevNotes => prevNotes.filter(n => n.id !== id));
    // this is a bit better than the previous code

  };

  const handleCompleteNote = (e) => {

    const noteId = e.target.value;

    // const newNote = notes.map(note =>
    //   note.id == noteId ? { ...note, completed: !note.completed } : note);
    // setNotes(newNote);
    setNotes(prevnotes => prevnotes.map(note =>
      note.id == noteId ? { ...note, completed: !note.completed } : note));
  };

  return (
    <div className="container">
      <div className="note-header"></div>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList notes={notes} onDelete={handleDeleteNote} onComplete={handleCompleteNote} />
        </div>
      </div>
    </div>
  );
}

export default App;
