import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import GlobalStyles from 'GlobalStyles';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import Notification from '../Notification';
import { useLocalStorage } from 'hooks/useLocalStorage';
import {
  Container,
  WrapForms,
  WrapList,
  FormTitle,
  ListTitle,
} from './App.styled';

Notiflix.Notify.init({
  width: '500px',
  position: 'center-top',
  closeButton: true,
  fontFamily: 'Comic Sans MS',
  fontSize: '24px',
  warning: {
    background: 'rgb(255, 240, 245)',
    textColor: 'rgb(40, 70, 219)',
    notiflixIconColor: 'rgb(205, 92, 92)',
  },
});

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const findContactByName = name => {
    return contacts.find(item => item.name.toLowerCase() === name);
  };

  const formSubmitHandler = data => {
    const { name, number } = data;
    const normalizedName = name.toLowerCase();
    if (findContactByName(normalizedName)) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return;
    }
    addContact(name, number);
  };

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(contacts => [contact, ...contacts]);
  };

  const deleteContact = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <Container>
      <GlobalStyles />
      <WrapForms>
        <FormTitle>Phonebook</FormTitle>
        <ContactForm onSubmit={formSubmitHandler} />
        <Filter filter={filter} onChange={changeFilter} />
      </WrapForms>
      <WrapList>
        <ListTitle>Contacts</ListTitle>
        {contacts.length > 0 ? (
          <ContactList
            contacts={getVisibleContacts()}
            onDeleteContact={deleteContact}
          />
        ) : (
          <Notification message="There is no contact in Phonebook" />
        )}
      </WrapList>
    </Container>
  );
}
