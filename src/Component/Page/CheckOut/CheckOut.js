import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { authContext } from '../../../Context/AuthContext/AuthProvide';

const CheckOut = () => {

    const { _id, title,price } = useLoaderData();
    const {user} = useContext(authContext);
    const navigate = useNavigate();

    const handelPlaceOrder = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.fname.value} ${form.lname.value}`;
        const email = user?.email || 'Unregistered';
        const phone = form.phonenumber.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer:name,
            email,
            phone,
            message
        }

        if(phone.length > 10){
            alert('Your Phone number is valid')
        }
        else{
            alert('Phone number should ba 10 characters or longer');
        }

        fetch('http://localhost:5000/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(order)
        }) 
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert("Your Order is placed successfully")
                form.reset()
                navigate('/orders')
            }

        })
        .catch(error =>console.error(error))
    }

    return (       
        <form onSubmit={handelPlaceOrder}>
            <h1 className='text-3xl text-center font-bold text-orange-600'>You want to Order: {title}</h1>
            <h2 className='text-2xl text-center font-bold text-blue-600'>Service Price: {price}</h2>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-5 m-2'>
                <input type="text" name='fname' placeholder="First Name" className="input input-bordered input-primary w-full" required />
                <input type="text" name='lname' placeholder="Last Name" className="input input-bordered input-primary w-full" required/>
                <input type="text" name='phonenumber' placeholder="Phone Number" className="input input-bordered input-primary w-full" required />
                <input type="text" name='email' placeholder="Your Email" defaultValue={user?.email} className="input input-bordered input-primary w-full" readOnly />
            </div>
            <div className='flex justify-center items-center'>
            <textarea name='message' className="textarea textarea-success text-center w-4/5 h-40 mb-2" placeholder="message"></textarea>
            </div>
            <div className='flex justify-center items-center'>
            
             <input className='btn btn-warning mb-2' type="submit" value="Place Your Order" />

            
            </div>

        </form>

    );
};

export default CheckOut;