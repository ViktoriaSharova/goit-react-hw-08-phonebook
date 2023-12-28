import { useDispatch } from 'react-redux';
import { setStoreFilter } from '../../redux/Contacts/ContactsSlice';
import { FilterText, InputFilter } from './Filter.styled';

export const Filter = () => {
  const currentFilter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const onSetFilter = newSearch => {
    dispatch(setStoreFilter(newSearch));
  };
  return (
      <FilterText>Find contact by name
      <InputFilter
        type="text"
        name="search"
        placeholder="Type name"
        value={currentFilter}
        onChange={evt => onSetFilter(evt.target.value)}
      ></InputFilter>
    </FilterText>
  );
};