import React from 'react';

const DisplayExpertise = ({ exData }) => {

    const { name, Description, image } = exData;

    return (
        
            <div className="card w-full my-5 shadow-xl">
            <div className="card-body">
                <h2 className="text-center font-bold text-2xl">{name}</h2>
                <p>{Description}</p>
            </div>
            <figure><img src={image} className='w-4/5 my-5' alt="Shoes" /></figure>
        
        </div>
    );
};

export default DisplayExpertise;