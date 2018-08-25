import React, { Component } from 'react';
import styled from 'styled-components';

import ProjectPreviewColor from '../components/ProjectPreviewColor';
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

const ProjectPreviewImageContainer = styled.div`
  height: 100%;
  position: relative;
  overflow: visible;
`;

const AboutImage = styled(InlineImg)`
  ${MediaQueries.small} {
    margin-bottom: 30px;
  }
`;

const AboutHeader = styled(H3)`
  margin-bottom: 10px;

  ${MediaQueries.small} {
    margin-bottom: 0;
  }
`;

const SocialHeader = styled(H4)`
  margin-bottom: 10px;
  margin-top: 30px;
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
            <ProjectPreviewImageContainer>
              <AboutImage
                src={Image.camden}
                mobileSrc={Image.camdenMobile}
                index={tracker.index()}
              />
              <ProjectPreviewColor index={tracker.index()} reverse>
                <div style={{ backgroundColor: '#DEA557' }} />
              </ProjectPreviewColor>
            </ProjectPreviewImageContainer>
          </ImageSection>
          <TextSection>
            <AboutHeader index={tracker.index()}>About Me</AboutHeader>
            <P index={tracker.index()} typeTime={1}>
              I'm Camden. I'm a developer and designer based in Boston, MA. I'm
              currently focused on front-end web development but I'm also
              experienced with mobile and full stack development, as well as UX
              design. I believe development and design are better together and
              try to integrate both as fully as possible in my work. When I'm
              not working on projects I enjoy listening to music, biking, and
              generally hanging out.
            </P>
            <SocialHeader index={tracker.index()}>Get in Touch</SocialHeader>
            <ul>
              <li>
                <A
                  mail
                  index={tracker.index()}
                  href="mailto:camdenphalen@gmail.com"
                >
                  Email
                </A>
              </li>
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
            {/* <A
              index={tracker.index()}
              href="https://drive.google.com/file/d/0B-RHHMn7HqGwbVlxQU9GbENYbms/view?usp=sharing"
            >
              View my resume
            </A> */}
          </TextSection>
        </GridParent>
      </div>
    );
  }
}

export default About;
