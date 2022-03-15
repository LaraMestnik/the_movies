import React, { useState, useRef, useEffect } from 'react';
import registerBg from '../assets/signupbg.jpg';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import useLogin from '../custom hooks/useLogin';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, error, loading } = useLogin();

    const emailRef = useRef();

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    async function handleLogIn(e) {
        e.preventDefault();

        login(email, password);

        setEmail('');
        setPassword('');

    }

    return (
        <main id="login">
            <section className="left" style={{ backgroundImage: `url(${registerBg})` }}>
                <Logo className="logo--dark" />
            </section>
            <section className="right">
                <div className="right__up">
                    <form onSubmit={handleLogIn}>
                        {loading && <p>Loading</p>}
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" ref={emailRef} name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                        {error && <p>{error}</p>}

                        <button style={{ marginTop: '.4rem' }} className="btn btn-primary btn-medium" type="submit" disabled={loading}>Log In</button>
                    </form>
                </div>
                <div className="right__down">
                    <p>Don't have an account yet? <Link to="/signup">Sign Up</Link></p>
                </div>
            </section>
        </main>
    )
}
