import { Formik } from 'formik';
import {
    FormWrapper,
    FormField,
    FormLabel,
    FormBtn,
} from './ContactForm.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/Contacts/Operations';
import { selectContacts } from '../../redux/Contacts/Selectors';

const contactsSheme = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.string().required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = value => {
    const hasName = contacts.some(contact => contact.name === value.name);
    if (hasName) {
      alert(`${value.name} is already in contacts.`);
      return;
    } else {
      dispatch(addContacts(value));
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactsSheme}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
    >
      <FormWrapper>
      <div>
        <FormLabel>
          Name
          <FormField name="name" />
        </FormLabel>
        </div>
        <div>
        <FormLabel>
          Number
          <FormField name="number" />
          </FormLabel>
          </div>
        <FormBtn type="submit">Add contact</FormBtn>
      </FormWrapper>
    </Formik>
  );
};