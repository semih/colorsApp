import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getColors } from "../../redux/actions/colors"
import ColorCard from "../ColorCard"
import Header from "../Header"
import styles from "./Home.module.css"
import { selectAreColorsLoading, selectColors } from "../../redux/accessors"

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getColors())
    return () => {}
  }, [dispatch])

  const isLoading = useSelector(selectAreColorsLoading)
  const colors = useSelector(selectColors)

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.cardsHolder}>
        {isLoading ? (
          "Loading..."
        ) : (
          <>
            {colors.map((c) => (
              <ColorCard key={c.id} {...c} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}
