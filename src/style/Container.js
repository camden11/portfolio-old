import styled from 'styled-components';
import MediaQueries from './MediaQueries';

const Container = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  padding-top: 55px;

  ${MediaQueries.medium} {
    width: 90%;
  }

  ${MediaQueries.small} {
    padding-top: 50px;
  }
`;

export default Container;
