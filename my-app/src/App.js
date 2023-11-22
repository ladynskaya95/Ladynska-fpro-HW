import React, { useState, useEffect } from "react";
import "./App.scss";
import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";

import ContactsList from "./components/ContactsList";
import ContactForm from "./components/ContactForm";

function App() {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);


  useEffect(() => {
    fetchContacts();
  }, []); 

  const fetchContacts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      
      const contactsWithIds = data.map((contact) => ({
        ...contact,
        id: uuidv4(),
      }));
      setContacts(contactsWithIds);
    } catch (error) {
      console.error("Помилка при завантаженні контактів:", error);
    }
  };

    const handleDeleteContact = (id) => {
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== id)
      );
    };

     const handleShowForm = () => {
       setShowForm(true);
     };

      const handleSaveContact = (contact) => {
        setContacts((prevContacts) => [...prevContacts, contact]);
        setShowForm(false);
      };

       const handleCancel = () => {
         setShowForm(false);
       };

  return (
    <div className="App">
      <div>
        <h1>Contacts</h1>
        <ContactsList
          contacts={contacts}
          onDeleteContact={handleDeleteContact}
        />
        <Button  variant="contained" color="success" onClick={handleShowForm}>Додати контакт</Button>
        {showForm && (
          <ContactForm onSave={handleSaveContact} onCancel={handleCancel} />
        )}
      </div>
    </div>
  );
}

export default App;
