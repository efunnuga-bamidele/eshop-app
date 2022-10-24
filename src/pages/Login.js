import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

//styles
import './Login.css'
//image
import StorefrontIcon from '@mui/icons-material/Storefront';

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const redirect = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        setError(null)
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res)
                redirect('/')
            })
            .catch((err) => {
                console.log(err.message)
                setError(err.message)
            })

    }

    const handleRedirect = () => {
        redirect('/signup')
    }

    return (
        <div className='login'>
                <Link to='/'>
                    <div className="login_logo">
                        <StorefrontIcon className="login_logoImage" fontSize="large" />
                        <h2 className='login_logoTitle'>eShop</h2>
                    </div>
                </Link>

               <div className="login_container">
               <h1>Sign-in</h1>
                    <form onSubmit={handleLogin}>
                    
                    <label>
                        <span>Email:</span>
                        <input type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </label>
                    <label>
                        <span>Password:</span>
                        <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password}/>
                    </label>

                    <button type='submit' className='login_signInButton'>Sign In</button>
                </form>
                <p className='error'>{error && error}</p>
                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button className='login_registerButton' onClick={handleRedirect}>Create your eShop Account</button>
               </div>
        </div>
    )
}