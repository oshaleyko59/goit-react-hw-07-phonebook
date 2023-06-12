import styled from 'styled-components';
import { Button} from 'common/styledCommon';

export const Item = styled.div`
  font-size: 16px;
  font-style: italic; //
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

export const Phone = styled.a`
  color: blue;
`;

export const DeleteBtn = styled(Button)`
  height:28px;
  width: 36px;
  border-radius: 8px;
`;
