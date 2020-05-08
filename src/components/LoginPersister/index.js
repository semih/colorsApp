import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { userLoggedIn } from "../../redux/actions/login"

const LoginPersister = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const loggedInUserToken = localStorage.getItem("loggedInUserToken")
    const loggedInUserEmail = localStorage.getItem("loggedInUserEmail")
    //gerçek api ile çalışırken token hala geçerli mi kontrolü yapılır

    if (loggedInUserToken && loggedInUserEmail) {
      dispatch(userLoggedIn(loggedInUserEmail))
    }
  }, [dispatch])

  return null
}

export default LoginPersister
