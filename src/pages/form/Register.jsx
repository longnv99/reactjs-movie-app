import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ButtonForm } from '../../components/button/Button';
import InputField from '../../components/input-field/InputField';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPW, setConfirmPW] = useState('');
    const [validation, setValidation] = useState({});

    const valid = () => {
        const msg = {}
        if(email === ''){
            msg.email = 'Please enter email'
        } 
        if(password === ''){
            msg.password = 'Please enter password'
        }
        if(confirmPW === ''){
            msg.confirmPW = 'Please enter confirm password'
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
                    <h2>Sign Up</h2>
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

                    <InputField 
                        name='password'
                        title='Confirm Password'
                        type='password'
                        value={password}
                        placeholder='Confirm password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className='warning'>{validation.confirmPW}</p>

                    <ButtonForm type='button' onClick={valid}>Sign Up</ButtonForm>
                    <div className="link">
                        <Link to='/login'>Sign in</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register
