import styled from 'styled-components';
import InlineImg from './InlineImg';

const PhotoImg = styled(InlineImg)`
  display: block;
  margin: 20px 0;
  border: 3px solid;
  border-color: ${props => (props.dark ? '#F9F9F9' : '#ffffff')};
  width: 100%;
`;

export default PhotoImg;
