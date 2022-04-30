import React from 'react'
import { FaVolumeUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import styles from './index.module.css'

export const word = () => {
  const searchedWord = useSelector(state => state.searchedWord)

  console.log(searchedWord[0])

  if(searchedWord.length === 0){
    return null
  }
  const audio = new Audio(`${searchedWord[0].phonetics[0].audio}`)
  const start = () => {
    audio.play()
  }
  return(
    <div className={styles.div}>
      <Card className={styles.card}>
        <Card.Body >

          <Card.Title className={styles.cardTitle}>
            <span className={styles.title}>{searchedWord[0].word}</span>
            <span onClick={start} className={styles.audioIcon}><FaVolumeUp/></span>
          </Card.Title>
          <Card.Text>
            <span className={styles.text}>Show IPA</span>
            <span className={styles.IPA}>[{searchedWord[0].phonetic}]</span>
          </Card.Text>

        </Card.Body>
      </Card>
      <Card>
      </Card>
    </div>
  )

}