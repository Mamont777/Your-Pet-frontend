import { CrossSmall } from 'components/icons';
import { Wrapper, Text, Btn } from './CheckedFilter.styled';

const CheckedFilter = ({ text, clickHandler }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <Btn type="button" onClick={clickHandler}>
        <CrossSmall />
      </Btn>
    </Wrapper>
  );
};

export default CheckedFilter;
