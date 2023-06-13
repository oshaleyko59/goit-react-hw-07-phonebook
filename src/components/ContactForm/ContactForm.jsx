import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContactList } from 'redux/selectors';
import { Label, Input } from 'common/styledCommon';
import { SubmitBtn, Form } from './styled';
import { setFilter } from 'redux/filterSlice';

const isAlreadyInContacts = (contacts, newContact) => {
  return contacts.some(
      contact =>
        contact.name.toLocaleLowerCase() === newContact.name.toLowerCase()
  );
}

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactList);

  const onSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const newContact = {
      name: form.elements.name.value
        .split(' ')
        .filter(word => word !== '')
        .join(' '),
      number: form.elements.number.value,
    };

    if (isAlreadyInContacts(contacts, newContact)) {
      dispatch(setFilter(newContact.name.toLowerCase()));
      window.alert(`Error! ${newContact.name} is already in the contacts`);
      return;
    }

    dispatch(addContact(newContact));
    dispatch(setFilter(''));
    form.reset();
  };

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <SubmitBtn type="submit">Add</SubmitBtn>
    </Form>
  );
};

