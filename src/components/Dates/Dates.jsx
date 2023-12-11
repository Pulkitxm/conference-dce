import React from 'react'
import './Dates.css'

import Calendar from '../../assets/calender.png'

const Dates = ({ datesRef }) => {
    return (
        <div className='dates' ref={datesRef} >
            <h1>
                IMPORTANT DATES
            </h1>
            <div className="cards">
                {
                    (() => {
                        const elements = [];
                        for (let i = 0; i < 6; i++) {
                            elements.push(
                                <div className="card-date" key={i}>
                                    <img src={Calendar} className='calendarImg' alt="" />
                                    hello
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