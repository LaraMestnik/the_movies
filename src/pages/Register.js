import React from 'react';
import registerBg from '../assets/signupbg.jpg';
import Form from '../components/Form';

console.log(registerBg);

export default function Register() {
    return (
        <main id="register">
            <section id="left" style={{ backgroundImage: `url(${registerBg})` }}>

            </section>
            <section id="right">
                <Form />
            </section>
        </main>
    )
}
