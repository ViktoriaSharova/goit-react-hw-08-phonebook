import { useDispatch } from 'react-redux';
import { filters } from '../../redux/Contacts/ContactsSlice';
import { FilterText, InputFilter } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const updateFilter = value => {
    dispatch(filters(value));
  };
  return (
      <FilterText>Find contact by name
      <InputFilter
        type="text"
        name="search"
        placeholder="Type name"
        onChange={evt => updateFilter(evt.target.value)}
      ></InputFilter>
    </FilterText>
  );
};