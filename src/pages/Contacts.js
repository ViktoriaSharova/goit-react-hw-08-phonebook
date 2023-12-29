import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { selectContacts, selectError, selectIsLoading } from '../redux/Contacts/Selectors';
import { Filter } from '../components/Filter/Filter';

export default function Contacts() {
  const dataContacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
      <ContactForm />
      <div>{isLoading && !error && 'Loading... Please wait.'}</div>
      <Filter />
      {dataContacts && <ContactList />}
    </>
  );
}