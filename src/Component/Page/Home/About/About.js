import React from 'react';
import imge01 from '../../../../Asset/about-img-01.jpg';
import imge02 from '../../../../Asset/about-img-02.png';


const About = () => {
    return (
        <div className="hero bg-blue-50 rounded-xl my-5 pb-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={imge01} className="w-4/5 h-full rounded-lg shadow-2xl" alt='' />
                    <img src={imge02} className="absolute rounded-lg right-5 top-1/2 border-8 shadow-2xl" alt='' />

                </div>
                <div className='w-1/2'>
                    <h3 className='text-2xl text-secondary font-bold my-5'>About Us</h3>
                    <h1 className="text-5xl font-bold">Incubyte Ltd</h1>
                    <p className="py-6">With over 3 years of experience, we at Incubyte specialize in setting <br />
                        up captive development centers for growing startup,addressing key <br />
                        challenges key challenges and providing tailor-mad solutions for <br />
                        business needs.
                        </p>
                    <button className="btn btn-secondary">Get More Informtion</button>
                </div>
            </div>
        </div>
    );
};

export default About;