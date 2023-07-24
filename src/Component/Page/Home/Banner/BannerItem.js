import React from 'react';
import './BannerItem.css';
import { Link } from 'react-router-dom';

const BannerItem = ({ slide }) => {


    const { image, id, prev, next } = slide;

    return (

        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img w-full'>
                <img src={image} className="w-full h-full rounded-xl" alt='' />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4">
                <h1 className='text-6xl font-bold text-white'>
                    Welcome to Incubyte
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/3 ">
                <h3 className='text-2xl text-white'>
                    Building bridges to success in the tech ecosystem.
                </h3>

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/2">

                <Link to='/orders'><button className="btn btn-active btn-secondary mr-5">Work Orders</button></Link>
                <Link to='/electricCar'><button className="btn btn-warning">Car Section</button></Link>


            </div>
        </div>

    );
};

export default BannerItem;