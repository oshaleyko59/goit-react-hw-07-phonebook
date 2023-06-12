// ************************************************************
// * Поле пошуку для фільтрації списку контактів за ім'ям:
// *  - інпут без форми, значення якого записується у стан (контрольований елемент)
// *  - Логіка фільтрації повинна бути нечутливою до регістру

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { Label } from 'common/styledCommon';
import { SearchInput } from './styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChange = ({ target: { value } }) => {
    dispatch(setFilter(value.toLowerCase()));
  };

  return (
    <Label>
      <SearchInput
        type="text"
        id="filter"
        name="filter"
        value={filter}
        onChange={onChange}
        placeholder="Type in your search pattern here"
      />
    </Label>
  );
};

