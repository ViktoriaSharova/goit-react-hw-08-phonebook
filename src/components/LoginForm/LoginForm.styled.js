import { Button, Container, TextField } from '@mui/material';
import { styled } from '@mui/system';

export const StyledLoginFormContainer = styled(Container)({
  backgroundColor: 'rgba(30, 30, 30, 0.8)',
  borderRadius: '16px',
  padding: '20px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(6.6px)',
  WebkitBackdropFilter: 'blur(6.6px)',
  border: '1px solid rgba(103, 74, 74, 0.33)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const StyledForm = styled('form')({
  width: '100%',
  marginTop: '1rem',
});

export const StyledTextField = styled(TextField)({
  '& label': {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  '& input': {
    fontSize: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '8px',
    padding: '8px',
    width: '100%',
  },
});

export const StyledButton = styled(Button)({
  background: '#d63431',
  color: '#fff',
  '&:hover': {
    background: 'green',
  },
});