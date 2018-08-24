import styled from 'styled-components';
import { MediaQueries } from '../style';
import ImageTypedSection from './ImageTypedSection';

const ProjectPreviewColor = styled(ImageTypedSection)`
  position: absolute;
  z-index: -1;
  top: -20px;
  right: ${props => (props.reverse ? 'auto' : '-20px')};
  left: ${props => (props.reverse ? '-20px' : 'auto')};
  transition: top 0.2s, right 0.2s, left 0.2s;
  overflow: visible;

  .project-preview:hover & {
    right: ${props => (props.reverse ? 'auto' : '0px')};
    left: ${props => (props.reverse ? '0px' : 'auto')};
    top: 0px;
  }

  ${MediaQueries.small} {
    top: 0;
    overflow: hidden;
    left: -100%;
    z-index: 0;

    .project-preview:hover & {
      left: -100%;
    }
  }

  > div {
    width: 100%;
    height: 100%;
  }
`;

export default ProjectPreviewColor;
