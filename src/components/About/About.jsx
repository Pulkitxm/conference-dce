import React from 'react'
import './About.css'

const About = ({ aboutRef, scopeRef }) => {
  return (
    <div className='about' ref={aboutRef} >
      <h1>
        AIM OF THE CONFERENCE
      </h1>
      <p>
        The goal of the Inter-National Conference on Computing Informatics,  Networks  &  Security is to bring together academics,
        scholars, and developers under one roof to share knowledge, experiences, and research ndings in order to
        advance science and technology as a whole. Its goal is to promote the creation and application of innovative
        methods, tools, and techniques for the design, development, and implementation of various technological systems
        from all specialized and multidisciplinary domains through study and practice. The conference gives everyone the
        chance to expand network, discuss ideas, and present research to a global audience. Discussions about the most
        recent  breakthroughs, trends, and other di culties and concerns are also welcome
      </p>
      <h1 ref={scopeRef}>
        SCOPE OF THE CONFERENCE
      </h1>
      <p>
        The Conference aims to provide a platform for Member States,
        inter-national organizations, civil society, and the Industry of Computing.
        Networking & Security to:
        <ul>
          <li>Strengthen national cooperation and partnership for promoting
            equitable, inclusive, and transparent use of computing, security
            & networking in education.</li>
          <li>Debate whether skills needed to succeed in the computing era
            that can be anticipated, and share experiences on the development
            of AI skills in order to enable humans to live and work together
            with AI. </li>
          <li>Exchange information on the latest trends in computing, security
            & networking  and how the trends are shaping education and
            learning.</li>
          <li>Assess lessons learned from emerging national policies and
            strategies for leveraging computing, security & networking</li>
        </ul>
      </p>
    </div>
  )
}

export default About