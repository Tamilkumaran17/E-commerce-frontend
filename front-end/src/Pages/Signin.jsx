import React, { useContext, useState } from 'react';
import './CSS/Signin.css'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { toast } from 'react-toastify';

const Signin =()=>{
    const [name,setName] = useState("");
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const handlelogin=()=>{
        if(name.trim() !== "")
        {
            setUser(name);
            navigate('/');
        }
        else{
            alert("Invalid credentials");
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handlelogin();
            toast.success("Login Successfully");
        }
    };
    

    return( 
        <div className='signin'>
            <div className="signin-container">
                <h1>Login</h1>
                <div className="signin-fields">
                    <input type="text" value={name} placeholder='Your Name' onChange={(e)=> setName(e.target.value)} onKeyDown={handleKeyDown}/>
                    {/* <input type="email" name=""  placeholder='Your email'id="" /> */}
                    <input type="password" placeholder='Password' onKeyDown={handleKeyDown} />
                </div>
                <button className='continue' onClick={handlelogin}>Continue</button>
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