import { Formik } from 'formik';
import {
    FormWrapper,
    FormField,
    FormLabel,
    FormBtn,
} from './ContactForm.styled';
import * as Yup from 'yup';

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
      dispatch(addContact(value));
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