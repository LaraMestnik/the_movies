import React, { useState } from 'react';
import registerBg from '../assets/signupbg.jpg';
import { Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    return (
        <main id="login">
            <section className="left" style={{ backgroundImage: `url(${registerBg})` }}>

            </section>
            <section className="right">
                <div className="right__up">
                    <form>
                        <p style={{ color: '#fff' }}>{error}</p>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </div>

                        <button style={{ marginTop: '.4rem' }} className="btn btn-primary btn-medium" type="submit">Log In</button>
                    </form>
                </div>
                <div className="right__down">
                    <p>Don't have an account yet? <Link to="/register">Register</Link></p>
                </div>
            </section>
        </main>
    )
}
