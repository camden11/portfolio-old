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
          Here is some more information about me which will be helpful for you to know.
        </H1>
        <div className="grid-parent">
          <div className="five about-image-section">
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
          <div className="seven">
            <H3 index={tracker.index()} className="about-header">About Me</H3>
            <P index={tracker.index()}>I'm Camden. I enjoy hanging out and building websites. I dislike overhead lighting. I am not really that great at writing about myself so this is going to have to do. I hope you have an enjoyable day.</P>
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
