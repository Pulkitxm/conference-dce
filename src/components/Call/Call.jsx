import React from 'react'

import './Call.css'

const Call = () => {
  return (
    <div className='call' >
      <h1>
        CALL FOR PAPERS AND CONFERENCE THEME
      </h1>
      <p>
        High quality unpublished original research contributions describing conceptual, constructive, experimental, analytical and theoretical work towards various themes of the conference are invited for the participation in the conference.
      </p>
      <p>
        The themes of the ऊर्जाSangam-2023 include the followings:
      </p>
      <div className="boxes">
        <div className="box">
          Energy and Environment
        </div>
        <div className="box">
          Energy and Materials
        </div>
        <div className="box">
          Energy and Manufacturing
        </div>
        <div className="box">
          Energy for Industry and Power
        </div>
        <div className="box">
          Energy and Automation
        </div>
        <div className="box">
          Energy for Sustainable Habitat
        </div>
        <div className="box">
          Energy Economics and Policies
        </div>
        <div className="box">
          Energy for Transportation
        </div>
        <div className="box">
          Energy for Sustainable Development
        </div>
        <div className="box">
          Energy and Water Treatment
        </div>
      </div>
      <div className="box">
        <div className="head">Guidelines for Paper submission</div>
        <p>
          The full length paper is restricted to 10 pages, including figures, tables and references etc. The templates and guidelines for full length paper are available at the Downloads tab. Abstract/Full length papers will be submitted through Microsoft Conference Management Tootlkit (CMT). Register in Microsoft Conference Management Tootlkit and Login, then search conference in 'All Conferences' section by typing 'First International conference on advancement in Energy' or 'Urjasangam' or 'Sangam' or 'sangam' or 'sangam2023'. The link of the conference would be displayed then click on that, you will reach to Author Console (do not click on external URLs displayed there otherwise you will reach to the official conference website again) and thereafter click on '+Create New Submission' for submitting Abstract/Full length Paper.
          The plagiarism (similarity index) limit is permitted up to 15%.
          Guidelines for Authors
        </p>
      </div>
      <div className="box">
        <div className="head">Publication</div>
        <p>
          All accepted, presented and registered papers will be published in the Scopus Indexed Journal 'NanoWorld Journal (Impact factor 1.53, Scopus ID 21100926589)' and confernce proceedings/book series.
        </p>
      </div>
      <div className="box">
        <div className="head">Awards</div>
        <ul>
          <li>Best Paper Award</li>
          <li>Best Poster Award</li>
          <li>Best Paper presentation awards session-wise</li>
        </ul>
      </div>
    </div>
  )
}

export default Call