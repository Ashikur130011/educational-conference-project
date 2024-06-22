import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginError, setLoginError] = useState('')
    const{signInUser} = useContext(AuthContext)
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = e => {
        e.preventDefault()
        setLoginError('')

        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
            setLoginError("Please enter a valid email")
            return;
        }
        
        //sign in
        signInUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => {
            setLoginError(error.message)
        })
        setEmail('')
        setPassword('')
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login Now !</h1>
                    
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin}  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">E-mail</span>
                            </label>
                            <input type="email" 
                            name="email" 
                            
                            placeholder="Enter Your E-mail...
                            " className="input input-bordered outline" 
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered outline"
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {
                               loginError && <p>{loginError}</p>
                            }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Don't Have Account? Please <Link to="/register" className='text-blue-600'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;