import React from 'react';
import './App.css';
import Form from '../components/Form'
import List from '../components/List'
import Filter from '../components/Filter';
import { connect } from 'react-redux';

function App({ contactsItems }) {

    return (
      <div className="app">
        <h1>Phonebook</h1>

        <Form />
      
        {contactsItems.length > 0
          ? (<>
            <h2>Contacts</h2>
            <Filter />
            <List />
          </>)
          : (<p>no contacts at the moment</p>)
        }
      </div>
    );
    
}

const mapStateToProps = state => {
  return {
    contactsItems: state.contacts.items,
    filter: state.contacts.filter
    }
};

export default connect(mapStateToProps)(App);
