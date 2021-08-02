import React from 'react';
import registerBg from '../assets/signupbg.jpg';
import Form from '../components/Form';
import { Link } from 'react-router-dom';

export default function Login() {

    return (
        <main id="login">
            <section class="left" style={{ backgroundImage: `url(${registerBg})` }}>

            </section>
            <section class="right">
                <div className="right__up">
                    <Form />
                </div>
                <div className="right__down">
                    <p>Don't have an account yet? <Link to="/register">Register</Link></p>
                </div>
            </section>
        </main>
    )
}
