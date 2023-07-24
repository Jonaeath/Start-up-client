import React, { useContext } from 'react';
import imge from '../../../../Asset/login.PNG';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../../../Context/AuthContext/AuthProvide';


const SignUp = () => {
    const {createUser} = useContext(authContext);
    const navigate = useNavigate();

    const handleSignIN = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            if(createUser){
                alert('Your SignUp Complete Successfully')
                form.reset()
                navigate('/login')
            }
        })
        .catch(err => console.error(err))
            
    }

    return (
        <div>
             <div className="hero w-full my-10">
                <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={imge} className='w-3/5' alt='' />
                    </div>
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100 my-10 pb-10">
                        <form onSubmit={handleSignIN} className="card-body">
                            <div className="form-control">
                            <h1 className="text-4xl text-center font-bold">Sign Up!</h1>
                            <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type='submit' value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-center'>Already You Have an account.<Link className='text-orange-600 font-bold' to='/login'>LogIn</Link></p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default SignUp;