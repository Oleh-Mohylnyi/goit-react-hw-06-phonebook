// import logo from './logo.svg';
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Form from '../components/Form'
import List from '../components/List'
import { v4 as uuid } from 'uuid';
import Filter from '../components/Filter';
import { connect } from 'react-redux';

function App() {

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? []
  })
  const [filter, setFilter] = useState('')

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
   }, [contacts])

  const handleFilterChange = (e) => {
    setFilter( e.target.value )
  }

 const onSubmit = (name, number) => {
    
    const regNumber = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
    const regName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/

    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`)
    } else {
      if (name === '' || number === '') {
        alert("Do not save contact without a name or number")
      } else {
        if (!regName.test(name)) {
          alert("Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.")
        } else {
          if (!regNumber.test(number)) {
            alert("Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +")
          } else {
            saveContact({ name, number })
          }
        }
      }
    }
  }

  const saveContact = ({name, number}) => {
    const contact = { id: uuid(), name, number }
    setContacts(( contacts ) => [contact, ...contacts])
    setFilter('')
  };

  const deleteContact = id => {
    setContacts(
      contacts.filter(contact => contact.id !== id)
    )
  }
  
  const filtredContacts =
    contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className="app">
      <h1>Phonebook</h1>

      <Form
        saveForm={onSubmit}
      />
      
      {contacts.length > 0 
        ? (<>
          <h2>Contacts</h2>
          <Filter
              handleChange={handleFilterChange}
              filter={filter} />
          </>)
        : (<p>no contacts at the moment</p>)
      }

      <List
        filtredContacts={filtredContacts}
        deleteContact={deleteContact}
      />
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
    filtredContacts: state.contacts.item,
    filter: state.contacts.filter
  }
}

export default connect(mapStateToProps)(App);

