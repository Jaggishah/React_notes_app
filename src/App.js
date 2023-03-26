import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList'
import Search from './components/Search';
import Header from './components/Header';

export default function App() {
  const [notes ,setNotes] = useState([
    {
    id : nanoid(),
    text :"this is my First Notes!",
    date : "15/04/2021"
    },
    {
    id : nanoid(),
    text :"this is my Second Notes!",
    date : "18/04/2021"
    },
    {
    id : nanoid(),
    text :"this is my Third Notes!",
    date : "18/04/2021"
    },
    {
    id : nanoid(),
    text :"this is my New Notes!",
    date : "18/04/2021"
    },

]);
  const [searchText, setSearchText] = useState('');

  const [ darkMode, setdarkMode ] =useState(false);
  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('reat-notes-app-data'));
    if (savedNotes){
      setNotes(savedNotes)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem('reat-notes-app-data',JSON.stringify(notes));
  },[notes]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newnotes = [...notes, newNote]
    setNotes(newnotes);
  };

  const deleteNote = (id) =>{
    const newNotes = notes.filter((note)=> note.id !== id)
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className='container'>
      <Header handleToggleDarkMode={setdarkMode}/>
      <Search handleSearchNote={setSearchText}/>
      <NotesList notes = {notes.filter((note)=>note.text.toLowerCase().includes(searchText.toLowerCase()))} 
      handleAddNote = {addNote}
      handledeleteNote = {deleteNote}/>
    </div>
    </div>
  )
}
