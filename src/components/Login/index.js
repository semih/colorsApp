import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userLoggedIn } from '../../actions/login'
import { useState } from 'react'
import styles from "./Login.module.css"
import { postData } from '../../utils/helpers';
import { Redirect } from 'react-router-dom'
import { selectIsUserLoggedIn } from '../../redux/accessors';

export default function Login() {
    const dispatch = useDispatch()

    const [isLoading, setLoading] = useState(false)
    const [isErred, setErred] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isUserLoggedIn = useSelector(selectIsUserLoggedIn)

    async function handleSubmitLogin() {

        setErred(false)
        setLoading(true)

        const data = await postData('https://reqres.in/api/login', {
            email, password
        })
        setLoading(false)
        
        if(data.error) {
            setErred(true)
        }

        if(data.token) {
            dispatch(userLoggedIn(email))
        }
    }

    // { "email": "eve.holt@reqres.in", "password": "cityslicka" }

    if(isUserLoggedIn) {
        return (
            <Redirect to='/' />
        )
    }

    return (
        <div className={styles.loginForm}>
        {isErred && <div>Login error, check your password and try again</div>}
            <label>
                <span>Email</span>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                <span>Password</span>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button disabled={isLoading || email === '' || password === ''} onClick={handleSubmitLogin}>login</button>
        </div>
    )
}