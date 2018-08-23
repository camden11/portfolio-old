import React, { Component } from 'react';
import styled from 'styled-components';

import ImageTypedSection from '../components/ImageTypedSection';
import { H1, H3, H4, InlineImg, A, P } from '../components/typed';

import Image from '../img';
import { TypeIndexTracker } from '../lib/utils';
import { MediaQueries } from '../style';

const GridParent = styled.div`
  width: 100%;
`;

const ImageSection = styled.div`
  width: calc(41.66% - 70px);
  float: left;

  ${MediaQueries.small} {
    width: calc(100% - 20px);
  }
`;

const TextSection = styled.div`
  width: 58.33%;
  float: left;
  padding-left: 30px;

  ${MediaQueries.small} {
    width: 100%;
    padding-left: 0;
  }

  ul {
    padding: 0;
    margin-top: 0;
  }

  li {
    list-style-type: none;
    margin-bottom: 0;
  }
`;

class About extends Component {
  render() {
    const tracker = new TypeIndexTracker({ tracker: this.props.tracker });
    return (
      <div className="about">
        <H1 index={tracker.index()}>
          I'm a creative developer focused on the intersection of development
          and design.
        </H1>
        <GridParent>
          <ImageSection>
            <div className="project-preview-image-container">
              <InlineImg
                className="project-preview-image about-image"
                src={Image.camden}
                mobileSrc={Image.camdenMobile}
                index={tracker.index()}
              />
              <ImageTypedSection
                index={tracker.index()}
                className="project-preview-color reverse large-only"
              >
                <div style={{ backgroundColor: '#DEA557' }} />
              </ImageTypedSection>
            </div>
          </ImageSection>
          <TextSection>
            <H3 index={tracker.index()} className="about-header">
              About Me
            </H3>
            <P index={tracker.index()} typeTime={1}>
              I'm Camden. I'm a developer and designer based in Boston, MA. I'm
              currently focused on front-end web development but I'm also
              experienced with mobile and full stack development, as well as UX
              design. I believe development and design are better together and
              try to integrate both as fully as possible in my work. When I'm
              not working on projects I enjoy listening to music, biking, and
              generally hanging out.
            </P>
            <H4 index={tracker.index()} className="find-me-on">
              Find me on
            </H4>
            <ul>
              <li>
                <A
                  index={tracker.index()}
                  href="https://www.linkedin.com/in/camdenphalen/"
                >
                  LinkedIn
                </A>
              </li>
              <li>
                <A index={tracker.index()} href="https://github.com/camden11">
                  Github
                </A>
              </li>
              <li>
                <A
                  index={tracker.index()}
                  href="https://www.instagram.com/camdenphalen/"
                >
                  Instagram
                </A>
              </li>
            </ul>
            <A
              index={tracker.index()}
              href="https://drive.google.com/file/d/0B-RHHMn7HqGwbVlxQU9GbENYbms/view?usp=sharing"
            >
              View my resume
            </A>
          </TextSection>
        </GridParent>
      </div>
    );
  }
}

export default About;
