import React, { useEffect } from 'react'
import styles from './index.module.css'
import { useDispatch } from 'react-redux'
import { randomWord } from '../../reducer/RandomWord'
import WordCard from './card'

export const RandomWord = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(randomWord())

  }, [dispatch])
  return(
    <div className={styles.div}>
      <h1 className={styles.h1}>Word of the day</h1>
      <p className={styles.p}>Build your vocabulary with new words and definitions every day of the week</p>
      <WordCard />
    </div>
  )
}