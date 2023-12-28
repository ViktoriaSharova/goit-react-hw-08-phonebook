import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListItemBtn } from './ContactList.styled';
import { selectFilter } from '../../redux/Contacts/Selectors'
import { deleteContacts } from '../../redux/Contacts/Operations';
import { selectContacts } from '../../redux/Contacts/Selectors';


export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const stateFilter = useSelector(selectFilter);

  const visibleContacts = contacts && contacts.filter(contact => {
    const hasFilteredName = contact.name
      .toLowerCase()
      .includes((stateFilter || '').toLowerCase());

    return hasFilteredName;
  });

  const handleDelete = contactId => {
    dispatch(deleteContacts(contactId));
  };

  return (
    <>
      {visibleContacts && visibleContacts.length > 0 && (
        <List>
          {visibleContacts.map(contact => (
            <ListItem key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <ListItemBtn onClick={() => handleDelete(contact.id)}>
                Delete
              </ListItemBtn>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};