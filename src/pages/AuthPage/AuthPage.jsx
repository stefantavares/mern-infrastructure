import './AuthPage.css';
import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <>
            <main className='AuthPage'>
                <div className='login'>
                    <h4 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 
                    <div className='auth-aside'>
                    <div className='logo'>APP NAME HERE</div>
                    <h2 className='auth-message-1'>Don't have an account yet?</h2>
                    <div className='signup-btn grow'>SIGN UP</div>
                </div>
                : 
                <div className='signup'>
                    <div className='auth-aside'>
                    <div className='logo'>APP NAME HERE</div>
                    <h2 className='auth-message-1'>Already have an account?</h2>
                    <div className='login-btn grow'>LOG IN</div>
                </div>
                </div>
                }</h4>
                </div>
                {showLogin ?  
                <div className='login-nav'>
                    <h4 className='auth-message-2'>Please Log In</h4>
                    <LoginForm setUser={setUser} /> 
                </div>
                : 
                <div className='signup-nav'>
                    <h4 className='auth-message-2'>Please create an account</h4>
                    <SignUpForm setUser={setUser} />
                </div>
                }
            </main>
        </>
    )
}

export default AuthPage;