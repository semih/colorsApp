import React from 'react'
import styles from './Home.module.css'
import { useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { selectIsUserLoggedIn } from '../../redux/accessors';

export default function Home() {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
  console.log({ isUserLoggedIn })

  if (!isUserLoggedIn) {
      return <Redirect to='/login' />
  }

  return <div className={styles.home}>This is home</div>
}