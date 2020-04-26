import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userLoggedIn } from '../../actions/login'
import { useState } from 'react'

export default function Login() {

    const userName = useSelector(state => state.login.userName)
    const userAge = useSelector(state => state.login.userAge)

    const dispatch = useDispatch()

    function handleClickLoginAsName() {
        dispatch(userLoggedIn(newName))
    }

    const [newName, setNewName] = useState('')

    return (
        <div>
            <h1>this is a login</h1>
            <div>username: {userName}</div>
            <div>age: {userAge}</div>
            <input type="text" value={newName} onChange={e => setNewName(e.target.value)} />
            <button onClick={handleClickLoginAsName}>Login as {newName}</button>
        </div>
    )
}