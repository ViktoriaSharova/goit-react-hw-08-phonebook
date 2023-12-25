import { Field, Form } from 'formik';
import { styled } from 'styled-components';

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;

    div {
    margin-bottom: 10px;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const FormField = styled(Field)`
  margin-top: 10px;
  width: 200px;
`;

export const FormBtn = styled.button`
  display: block;
  width: 150px;
  border-radius: 5px;
  background-color: lightblue;
  cursor: pointer;
`;