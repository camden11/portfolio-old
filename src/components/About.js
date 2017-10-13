import React, { Component } from 'react';
import { H1, H3, H4, L, P, InlineImg, A  } from '../components/Tags';
import Image from '../img';
import Documents from '../documents';
import ImageTypedSection from '../components/ImageTypedSection';
import { TypeIndexTracker } from '../lib/utils';

class About extends Component {
  render() {
    const tracker = new TypeIndexTracker(this.props.tracker);
    return (
      <div className="about">
        <H1 index={tracker.index()}>
          I'm a creative developer focused on the intersection of development and design.
        </H1>
        <div className="about-grid-parent">
          <div className="about-five about-image-section">
            <div className="about-image-container project-preview-image-container">
              <InlineImg className="project-preview-image" src={Image.camden} index={tracker.index()} />
              <ImageTypedSection
                index={tracker.index()}
                className="project-preview-color reverse"
              >
                <div
                  style={{ backgroundColor: '#6C93BA' }}
                >
                </div>
              </ImageTypedSection>
            </div>
          </div>
          <div className="about-seven">
            <H3 index={tracker.index()} className="about-header">About Me</H3>
            <P index={tracker.index()}>
              I'm Camden. I'm a developer and designer based in Boston, MA. I'm currently focused on
              front-end web devopment but I'm also experienced with mobile and full stack development, as
              well as UX design. I beleive development and design are better together and try to
              integrate both as fully as possible in my work. When I'm not working on projects I
              enjoy listening to music, biking, and generally hanging out.
            </P>
            <H4 index={tracker.index()} className="find-me-on">Find me on</H4>
            <ul>
              <li><A index={tracker.index()} href="https://www.linkedin.com/in/camdenphalen/">LinkedIn</A></li>
              <li><A index={tracker.index()} href="https://github.com/camden11">Github</A></li>
              <li><A index={tracker.index()} href="https://www.instagram.com/camdenphalen/">Instagram</A></li>
            </ul>
            <A index={tracker.index()} href={Documents.resume}>View my resume</A>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
