import React from 'react';
import elimg from '../../../../Asset/Ellipse2.png';

const SuccessStories = () => {
    return (
        <div className='bg-blue-500 my-1 rounded-xl'>
            <div className='h-64' style={{
                backgroundImage: `url("${elimg}")`,
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
            }}>

               <div className='p-16'>
               <p className='text-center font-bold text-3xl text-white'>Success Stories</p>
                <p className='text-center text-xl text-white p-2'>Over the year,We have helped numerous startups successfully<br/> establish their captive development centers.Join the roster of our <br/>successful collaboration</p>
               </div>


            </div>
        </div>
    );
};

export default SuccessStories;