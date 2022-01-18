import React, { useState } from 'react';
import registerBg from '../assets/signupbg.jpg';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import Logo from '../components/Logo';


export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            return setError("Passwords do not match! Try again");
        }

        auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
            console.log(userCredential.user);
            //history.push("/dashboard")
        }).catch((error) => {
            console.log(error.code, error.message);
        })
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');



    }


    return (
        <main id="register">
            <section className="left" style={{ backgroundImage: `url(${registerBg})` }}>
                <Logo className="logo--dark" />
            </section>
            <section className="right">
                <div className="right__up">
                    <form onSubmit={handleSubmit}>
                        <p style={{ color: '#fff' }}>{error}</p>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="confirm password">Confirm password</label>
                            <input type="password" name="confirm password" id="confirm password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                        </div>

                        <button style={{ marginTop: '.4rem' }} className="btn btn-primary btn-medium" type="submit">Submit</button>
                    </form>
                </div>
                <div className="right__down">
                    <p>Already have an account? <Link to="/login">Log In</Link></p>
                </div>
            </section>
        </main>
    )
}
