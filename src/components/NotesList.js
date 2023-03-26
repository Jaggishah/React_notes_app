import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

export default function NotesList( { notes , handleAddNote , handledeleteNote}) {
  return (
    <div className='notes-list'>
        {notes.map((notes)=>( <Note key={notes.id} id = {notes.id} text = {notes.text} date ={notes.date} handledeleteNote= {handledeleteNote}/>))}
        <AddNote handleAddNote={handleAddNote} />
    
    </div>
  )
}
