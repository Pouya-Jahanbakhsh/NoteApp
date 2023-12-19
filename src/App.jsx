import React, { useState } from "react"
import './App.css';
import AddNewNote from './components/AddNewNote';
import NoteList from './components/NoteList';

function App() {

const [notes , setNotes] = useState([]);

const handleAddNote = (newNote)=>{
  setNotes((prevNotes)=>[...prevNotes , newNote]); 

  // "prevNotes" can be everything shuch as "ali"! , it Shows the previous values ​​of the array notes

  // "[...prevNotes , newNote]" works like array.append(newNote) in python 
};

const handleDeleteNote = (id) =>{
  setNotes(notes.filter( n => n.id !== id )); 
  
  // n can be everything - it shows each of the notes
};

  return (
    <div className="container">
      <div className="note-header"></div>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteList notes = {notes} onDelete = {handleDeleteNote} />
        </div>
      </div>
    </div>
  );
}

export default App;
