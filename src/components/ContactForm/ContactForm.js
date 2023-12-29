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

const phonebookSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.string().required('Required'),
});

export const ContactForm = () => {
  const dataContacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handelForm = value => {
    if (
      dataContacts &&
      dataContacts.some(contact => contact.name === value.name)
    ) {
      alert('This contact is in your phone book');
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
      validationSchema={phonebookSchema}
      onSubmit={(value, action) => {
        handelForm(value);
        action.resetForm();
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