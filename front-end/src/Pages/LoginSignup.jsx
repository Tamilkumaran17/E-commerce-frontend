import React, { useContext, useState } from 'react';
import './CSS/LoginSignup.css'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';


const LoginSignup =()=>{
    const [name,setName] = useState("");
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const handleSign = () =>
    {
        if(name.trim() !== "")
        {
            setUser(name);
            navigate("/");
        }
        else{
            alert("Please enter a valid name");
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSign();
        }
    };
    

    return( 
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign up</h1>
                <div className="loginsignup-fields">
                    <input type="text" value={name} placeholder='Your Name' id="" onChange={(e)=>setName(e.target.value)} />
                    <input type="email" name=""  placeholder='Your email'id="" onKeyDown={handleKeyDown}/>
                    <input type="password" placeholder='Password' onKeyDown={handleKeyDown} />
                </div>
                <button className='continue' onClick={handleSign}>Continue</button>
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