import React from 'react';
import hR from '../../../../Asset/Expertise/Hiring.jpg';
import HRM from '../../../../Asset/Expertise/HRM.png';
import Tax from '../../../../Asset/Expertise/Tax.png';
import RG from '../../../../Asset/Expertise/RG.jpg';
import DisplayExpertise from './DisplayExpertise';


const expertiseData = [
    {
        id:1,
        name: "Hiring",
        Description: "Finding recruiting and hiring new employees is a crucial part of a startup is early growth.Your first new hires will play a critical role in shaping your company is future. Thus it is important to be intentional about finding the best employees for your startup.",
        image:hR,
    },
    {
        id:2,
        name:"Human Resources Management",
        Description:"Human resource management is the strategic approach to nurturing and supporting employees and ensuring a positive workplace environment. Its functions vary across different businesses and industries, but typically include recruitment, compensation and benefits, training and development, and employee relations",
        image:HRM,
    },
    {
        id:3,
        name: "Taxation",
        Description: "Taxation is a term for when a taxing authority, usually a government, levies or imposes a financial obligation on its citizens or residents. Paying taxes to governments or officials has been a mainstay of civilization since ancient times.",
        image:Tax,
    },
    {
        id:4,
        name:"Regulatory Guidance",
        Description:"Regulatory Guidelines means applicable rules, guidance, manuals, protocols, codes, guidelines, treaties, policies, notices, directions, decrees, judgments, awards or requirements, in each case of any Regulatory Authority to the extent that the foregoing do not have the force of law.",
        image:RG
    }
]


const Expertise = () => {
    return (
        <div className='bg-blue-50 pb-5 rounded-xl'>
             <p className='text-center font-bold text-4xl text-blue-600 p-5'>Our Expertise</p>
             <div className='grid grid-cols-2 gap-4' >
            {
                expertiseData.map(exData=><DisplayExpertise
                key = {exData.id}
                exData = {exData}
                ></DisplayExpertise>)
            }
        </div>
        </div>
        
    );
};

export default Expertise;