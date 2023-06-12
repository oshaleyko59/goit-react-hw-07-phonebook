import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';

import PropTypes from 'prop-types';
import { Item, Phone, DeleteBtn } from './styled';
import { deleteContact } from 'redux/contactsSlice';

export const ContactListItem = ({contact}) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(contact.id));

  return (
    <Item>
      {contact.name}:{' '}
      {contact.number ? (
        <Phone href={'tel:' + contact.number}>{contact.number}</Phone>
      ) : (
        'not set'
      )}
      <DeleteBtn type="button" onClick={onDelete}>
        <MdClose size={16} />
      </DeleteBtn>
    </Item>
  );
};

ContactListItem.propTypes = {
  contact:    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
  }).isRequired
};
