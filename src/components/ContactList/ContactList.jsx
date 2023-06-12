import { useSelector } from 'react-redux';
import { selectShownContacts } from 'redux/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './styled';

export const ContactList = () => {
  const visibleContacts = useSelector(selectShownContacts);

  return (
    <List>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          <ContactListItem contact={contact} />
        </li>
      ))}
    </List>
  );
};

