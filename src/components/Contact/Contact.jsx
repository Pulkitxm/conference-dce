import React from 'react'

import './Contact.css'

const Call = ({contactRef}) => {
  return (
    <div className='contact' ref={contactRef} >
      <h1>
        Contact
      </h1>
      <div className="details">
        <div className="box">
          <ul>
            <li>
              Location:
              <a href="https://maps.app.goo.gl/vK23zivYx3Z6Uwgs8" target='_blank'>
                Khentawas, Farrukh Nagar
                (122506), Gurugram, Haryana
              </a>
            </li>
            <li>
              Email: registrar@ggnindia.dronacharya.info
            </li>
            <li>
              Call: 0124 – 2375502, 2375503, 2375504
            </li>
          </ul>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.6911727299203!2d76.86666717617312!3d28.42857407577672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d6ad5abdad98b%3A0xeb13a7d0eb14cc49!2sDronacharya%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1702050935439!5m2!1sen!2sin" width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default Call