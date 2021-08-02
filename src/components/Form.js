import React, { useState } from 'react'

export default function Form({ register }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    return (
        <form>
            {register &&
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} />
                </div>
            }

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>

            {register &&
                <div>
                    <label htmlFor="confirm password">Confirm password</label>
                    <input type="password" name="confirm password" id="confirm password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                </div>
            }


            <button style={{ marginTop: '.4rem' }} className="btn btn-primary btn-medium" type="submit">Submit</button>
        </form>
    )
}