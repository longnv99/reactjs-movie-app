import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ButtonForm } from '../../components/button/Button'
import InputField from '../../components/input-field/InputField'
import './Form.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validation, setValidation] = useState({});

    const valid = () => {
        const msg = {}
        if(email === ''){
            msg.email = 'Please enter email'
        } 
        if(password === ''){
            msg.password = 'Please enter password'
        }

        setValidation(msg)
        if(Object.keys(msg).length > 0){
            return false;
        }
        return true;
    }

    return (
        <>
            <div className="form-wrap container">
                <form className='form'>
                    <h2>Sign In</h2>
                    <InputField 
                        name='email'
                        title='Email'
                        type='email'
                        value={email}
                        placeholder='Enter email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className='warning'>{validation.email}</p>
                    
                    <InputField 
                        name='password'
                        title='Password'
                        type='password'
                        value={password}
                        placeholder='Enter password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className='warning'>{validation.password}</p>
                    <ButtonForm type='button' onClick={valid}>Sign In</ButtonForm>
                    <div className="link">
                        <Link to='/register'>Sign up</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
