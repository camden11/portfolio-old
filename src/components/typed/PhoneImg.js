import styled from 'styled-components';
import { MediaQueries } from '../../style';
import InlineImg from './InlineImg';

const PhoneImg = styled(InlineImg)`
  width: 50%;
  display: block;
  margin: 20px auto;
  ${MediaQueries.small} {
    width: 70%;
  }
`;

export default PhoneImg;
