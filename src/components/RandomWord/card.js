import React from 'react'
import { Card, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import styles from './index.module.css'

const wordCard = ( ) => {
  const wordOfTheDay  = useSelector( state => state.randomWord )

  if(wordOfTheDay.length === 0 ){
    return (
      <div>
        <Spinner animation="border" role="status"/>
      </div>
    )
  }
  return(
    <div>
      { wordOfTheDay.map(word =>

        <Card key = {word.word} className={styles.card}>
          <Card.Body>
            <Card.Title className={styles.cardTitle}>{word.word}</Card.Title>
            <Card.Text>
              <span className={styles.cardSound}>Phonetic</span>
              {' '}{' '}
              <span className={styles.cardSound2}>[{word.pronunciation}] </span>
            </Card.Text>
            <Card.Text className={styles.definition}>{word.definition}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  )

}
export default wordCard