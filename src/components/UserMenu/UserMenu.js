import { useAuth } from '../../hooks/UserAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/Auth/Operations';
import { Button } from '@mui/material';
import { Div, P } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Div>
      <P>Welcome, {user.name} </P>
      <Button
        type="button"
        variant="contained"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Div>
  );
};