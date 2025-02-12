import React from 'react';
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom';


const LoginSignup =()=>{
    return( 
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign up</h1>
                <div className="loginsignup-fields">
                    <input type="text" name="" placeholder='Your Name' id="" />
                    <input type="email" name=""  placeholder='Your email'id="" />
                    <input type="password" placeholder='Password' />
                </div>
                <button className='continue'>Continue</button>
                <p className='loginsignup-login'> Already have an account? <Link to={'/signin'} className='login-link'> <span>Login here </span> </Link> </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By Continue, i agree to the term of use & privacy policy.</p>
                </div>
            </div>

            

        </div>
    )
}

export default LoginSignup