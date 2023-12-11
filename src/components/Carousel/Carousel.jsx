import React from 'react'

import carousel1 from '../../assets/carousel/1.jpg'
import carousel2 from '../../assets/carousel/2.jpg'
import carousel3 from '../../assets/carousel/3.jpg'
import carousel4 from '../../assets/carousel/4.jpg'
import carousel5 from '../../assets/carousel/5.jpg'
import './Carousel.css'

import banner from '../../assets/dce-banner.jpg'

const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="overlay">
                <h3 className='text-center' >INTERNATIONAL CONFERENCE on</h3>
                <h3 className='text-center' >Technical Innovations  in Industry 5.0</h3>
                <div className="banner-img d-flex justify-content-center my-4" >
                    <img src={banner} className='banner' alt="" />
                </div>
                <h3 className='text-center' >Hybrid Mode Conference</h3>
                <h4 className='text-center' >26-27 April, 2024</h4>
                <h5 className='text-center' >Organized by</h5>
                <h5 className='text-center' >Department of Computer Science</h5>
                <h4 className='text-center' >Dronacharya College of Engineering</h4>
                <h5 className='text-center' >Sector H6, Khentawas, Farrukh Nagar, Gurugram, Haryana</h5>
                <div className="d-flex justify-content-center">
                    <div className="box">

                    </div>
                </div>
            </div>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={carousel1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={carousel2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={carousel3} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={carousel4} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={carousel5} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel