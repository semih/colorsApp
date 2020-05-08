import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { userLoggedIn } from "../../redux/actions/login"
import { useState } from "react"
import styles from "./Login.module.css"
import { postData } from "../../utils/helpers"
import { Redirect } from "react-router-dom"
import { selectIsUserLoggedIn } from "../../redux/accessors"
import Input from "../Input"
import LoginButton from "../LoginButton"
import LoginForm from "../LoginForm"
import LoginErrorBar from "../LoginForm/LoginErrorBar"
import Header from "../Header"

export default function Login() {
  const dispatch = useDispatch()

  const [isLoading, setLoading] = useState(false)
  const [isErred, setErred] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const isUserLoggedIn = useSelector(selectIsUserLoggedIn)

  async function handleSubmitLogin(e) {
    e.preventDefault()
    setErred(false)
    setLoading(true)

    const data = await postData("https://reqres.in/api/login", {
      email,
      password,
    })
    setLoading(false)

    if (data.error) {
      setErred(true)
    }

    if (data.token) {
      dispatch(userLoggedIn(email))
      localStorage.setItem("loggedInUserToken", data.token)
      localStorage.setItem("loggedInUserEmail", email)
    }
  }

  // { "email": "eve.holt@reqres.in", "password": "cityslicka" }

  if (isUserLoggedIn) {
    return <Redirect to="/" />
  }

  return (
    <div className={styles.loginWrapper}>
      <Header />
      {isErred && <LoginErrorBar />}
      <LoginForm handleSubmit={handleSubmitLogin}>
        <Input
          label="Email"
          type="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.tip}>
          Tip: Use{" "}
          <span className={styles.textToSelect}>eve.holt@reqres.in</span> /{" "}
          <span className={styles.textToSelect}>citysclicka</span> to log in
        </div>
        <LoginButton disabled={isLoading || email === "" || password === ""}>
          Login
        </LoginButton>
      </LoginForm>
    </div>
  )
}
