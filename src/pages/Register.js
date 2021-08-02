import React from 'react';
import registerBg from '../assets/signupbg.jpg';
import Form from '../components/Form';
import { Link } from 'react-router-dom';

console.log(registerBg);

export default function Register() {

    const register = true;

    return (
        <main id="register">
            <section class="left" style={{ backgroundImage: `url(${registerBg})` }}>

            </section>
            <section class="right">
                <div className="right__up">
                    <Form register={register} />
                </div>
                <div className="right__down">
                    <p>Already have an account? <Link to="/login">Log In</Link></p>
                </div>
            </section>
        </main>
    )
}
