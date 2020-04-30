import React from 'react'
import styles from './Home.module.css'
import { useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { selectIsUserLoggedIn } from '../../redux/accessors';
import Header from '../Header';

export default function Home() {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
  
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.cardHolder}>There will be some cards here</div>
    </div>
    )
}