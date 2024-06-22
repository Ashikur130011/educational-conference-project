import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
    const [registerError, setRegisterError] = useState('')
    const {createUser} = useContext(AuthContext)
    
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        // create User
        createUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            alert('User Created Succesfully')
        })
        .catch(error => {
            setRegisterError(error.code)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register Now !</h1>
                    
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister}  className="card-body">
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">E-mail</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter Your E-mail..." className="input input-bordered outline" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered outline" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {
                            registerError && <p className='text-red-600'>{registerError}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <p>Already Have An Account? Please <Link to="/login" className='text-blue-600'>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;