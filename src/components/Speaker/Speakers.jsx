import React from 'react'
import './Speaker.css'

import Calendar from '../../assets/calender.png'

const Dates = ({ speakersRef }) => {
    return (
        <div className='speakers' ref={speakersRef} >
            <h1>
                KEYNOTE SPEAKERS
            </h1>
            <div className="cards">
                {
                    (() => {
                        const elements = [];
                        for (let i = 0; i < 14; i++) {
                            elements.push(
                                <div className="card-date" key={i}>
                                    <img src={'https://th.bing.com/th/id/OIP.vCNr3UL_DV6WByU6q5bS9AHaHa?rs=1&pid=ImgDetMain'} className='calendarImg' alt="" />
                                    <h2>Name </h2>
                                    <p>About</p>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            );
                        }
                        return elements;
                    })()
               }
            </div>
        </div>
    )
}

export default Dates