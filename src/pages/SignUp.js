import { useState, useRef, useEffect } from 'react';
import signUpBg from '../assets/signupbg.jpg';
import { Link } from 'react-router-dom';
import useSignUp from '../custom hooks/useSignUp';

//components
import Logo from '../components/Logo';


export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    /* const [confirmPassword, setConfirmPassword] = useState(""); */
    //data for sign up
    const { signup, error, loading } = useSignUp();
    //refs
    const errRef = useRef();
    const nameRef = useRef();



    //focus input on first render
    useEffect(() => {
        nameRef.current.focus();
    }, [])

    //handle submitting the form
    function handleSubmit(e) {
        e.preventDefault();

        signup(name, email, password);

        setName('');
        setEmail('');
        setPassword('');
        //setConfirmPassword('');

    }

    // set timeout on error notification
    /*   useEffect(() => {
          const timer = error && setTimeout(() => {
              errRef.current.remove();
          }, 3000);
          return () => clearTimeout(timer);
      }, [error]) */



    return (
        <main className="signup">
            {/*left section of the screen*/}
            <section className="signup__left" style={{ backgroundImage: `url(${signUpBg})` }}>
                <Logo className="logo--dark" />
            </section>

            {/*right section of the screen*/}
            <section className="signup__right">

                {/*up section*/}
                <div className="signup__right-up">
                    <p>{loading && 'Loading....'}</p>
                    <form onSubmit={handleSubmit}>

                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" ref={nameRef} name="name" id="name" value={name} onChange={e => setName(e.target.value)} required />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required />
                        </div>

                        {/*  <div>
                            <label htmlFor="confirm password">Confirm password</label>
                            <input type="password" name="confirm password" id="confirm password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
                        </div> */}
                        {error && <p ref={errRef}>{error}</p>}

                        <button style={{ marginTop: '.4rem' }} className="btn btn-primary btn-medium" type="submit" disabled={loading}>Submit</button>
                    </form>
                </div>

                {/*down section*/}
                <div className="signup__right-down">
                    <p>Already have an account? <Link to="/login">Log In</Link></p>
                </div>
            </section>
        </main>
    )
}
