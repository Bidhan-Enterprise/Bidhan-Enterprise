import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../../../public/img/banner1.png";
import img2 from "../../../../public/img/banner2.jpeg";
import img3 from "../../../../public/img/banner3.jpeg";
import img4 from "../../../../public/img/banner4.jpeg";

const  Banner = () => {
    return (
        <div>
             <Carousel className='text-center w-2/3'>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;