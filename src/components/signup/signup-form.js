import React from 'react';
import './signup-form.css';

export class SignupForm extends React.Component {
    render() {
        return(
            <div className='Signup'>
                <form className='form'>
                    <input type='text' placeholder='First Name' required/>
                    <input type='text' placeholder='Last Name' required/>
                    <input type='number' placeholder='Mobile Number' required/>
                    <input type='password' placeholder='Password' required/>
                    <input placeholder='Confirm Password' required/>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        )
    }
}