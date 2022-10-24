import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
//styles
import './Signup.css'
//image
import StorefrontIcon from '@mui/icons-material/Storefront';

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const redirect = useNavigate()

    const handlesignup = (e) => {
        e.preventDefault()
        setError(null)
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err.message)
                setError(err.message)
            })

    }

    return (
        <div className='signup'>
        <Link to='/'>
            <div className="signup_logo">
                <StorefrontIcon className="signup_logoImage" fontSize="large" />
                <h2 className='signup_logoTitle'>eShop</h2>
            </div>
        </Link>

       <div className="signup_container">
       <h1>Sign-up</h1>
            <form onSubmit={handlesignup}>
            
            <label>
                <span>Email:</span>
                <input type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            <label>
                <span>Password:</span>
                <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password}/>
            </label>

            <button type='submit' className='signup_signInButton'>Sign up</button>
        </form>
        <p className='error'>{error && error}</p>
        <p>
            By signing-up you agree to the eShop Website Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        
       </div>
</div>
    )
}