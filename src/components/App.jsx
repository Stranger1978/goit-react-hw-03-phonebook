import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Section from './Section';
import { nanoid } from 'nanoid';
//import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  }

  addContact = (name, number) => {
    const NewContact = {
      id: nanoid(),
      name,
      number
    };
    const { contacts } = this.state;
    if (contacts.some((contact) => name.toLowerCase() === contact.name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [NewContact, ...contacts],
    }));
  };

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }))
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  
  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContact();
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact}/>
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter}/>
          <ContactList contactList={visibleContacts} onDelete={this.deleteContact} />    
        </Section>
    </div>    
      );
  };
};