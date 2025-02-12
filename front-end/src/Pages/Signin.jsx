import React from 'react';
import './CSS/Signin.css'
import { Link } from 'react-router-dom';

const Signin =()=>{
    return( 
        <div className='signin'>
            <div className="signin-container">
                <h1>Login</h1>
                <div className="signin-fields">
                    <input type="text" name="" placeholder='Your Name' id="" />
                    {/* <input type="email" name=""  placeholder='Your email'id="" /> */}
                    <input type="password" placeholder='Password' />
                </div>
                <button className='continue'>Continue</button>
                <p className='signin-login'> New User? <Link to={'/login'} className='signin-link'> <span>SignIn here </span> </Link> </p>
                {/* <div className="signin-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By Continue, i agree to the term of use & privacy policy.</p>
                </div> */}
            </div>

            

        </div>
    )
}

export default Signin;