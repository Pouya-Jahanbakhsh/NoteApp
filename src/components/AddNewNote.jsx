import React, { useState } from "react"


export default function AddNewNote() {

const [title , setTitle] = useState("") //controlled input must be something (dont use : useState() or useState(null);)
const [description , setDescription] = useState("") //controlled input must be something (dont use : useState() or useState(null);)
const handleSubmit = (e) =>{
    e.preventDefault();
    const newNote = {
        title, //key = value => just write ones(title : title)
        description, //key = value => just write ones(description : description)
        id : Date.now(),
        completed : false,
        createdAt: new Date().toISOString(), 
    };
    setTitle("");
    setDescription("");
}



  return (
    <div className="add-new-note">
        <h2>Add New Note</h2>
        <form className="note-form" onSubmit={handleSubmit}>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" className="text-field" placeholder="Note title..." />
            <input value={description} onChange={(e)=>setDescription(e.target.value)} type="text" className="text-field" placeholder="Note description..." />
            <button type="submit" className="btn btn--primary">Add New Note</button>

        </form>
    </div>
  )
}
