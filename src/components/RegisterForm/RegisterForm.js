import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/Operations';
import { TextField, Button, Container } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          type="text"
          name="name"
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />

        <TextField
          type="email"
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />

        <TextField
          type="password"
          name="password"
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="outlined">
          Register
        </Button>
      </form>
    </Container>
  );
};