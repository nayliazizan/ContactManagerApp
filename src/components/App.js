import './App.css';
import React, { useState, useEffect} from 'react';
import {v4 as uuid} from 'uuid';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts"; //define local storage key for storing contacts
  //initialize state using useState for storing contacts
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []); 

  //handle add new contact
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuid(), ...contact}]); //to display after add contact
  }// i add "id: uuid()" so that i can delete contact based on id

  //handle remove a contact by id
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  // to let the page save the added contacts even after refresh page
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])
  
  return (
    <div className='ui container'>
      <Header />
      <div className='ui grid' style={{ marginTop: "2em" }}>
        <div className='eight wide column'>
          <AddContact addContactHandler={addContactHandler}/>
        </div>
        <div className='eight wide column'>
          <ContactList contacts={contacts} getContactId={removeContactHandler}/>
        </div>
      </div>
    </div>
  );
}

export default App;
