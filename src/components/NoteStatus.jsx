import React from 'react'

export default function NoteStatus({ notes }) {

    const allNotes = notes.length;
    const completedNotes = notes.filter(note => note.completed).length;
    const unCompletedNotes = allNotes - completedNotes;

    if (!allNotes) return <h2>You have not added any notes yet!</h2>;

    return (
        <ul className='note-status'>
            <li>All <span>{allNotes}</span></li>
            <li>Completed <span>{completedNotes}</span></li>
            <li>Open <span>{unCompletedNotes}</span></li>
        </ul>
    );
}
