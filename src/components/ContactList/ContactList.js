import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListItemBtn } from './ContactList.styled';
import { selectFilter } from '../../redux/Contacts/Selectors';
import { deleteContacts } from '../../redux/Contacts/Operations';



export const ContactList = () => {
  const visibleContacts = useSelector(selectFilter);
  const dispatch = useDispatch();

  const updateCont = id => {
    dispatch(deleteContacts(id));
  };
  return (
    <List>
      {visibleContacts &&
        visibleContacts.map(({ id, name, number }) => {
          return (
            <ListItem key={id}>
              {`${name}: ${number}`}
              <ListItemBtn
                // variant="outlined"
                // startIcon={<DeleteIcon />}
                onClick={() => updateCont(id)}
              >
                Delete
              </ListItemBtn>
            </ListItem>
          );
        })}
    </List>
  );
};