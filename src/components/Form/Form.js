
import React, { useState } from 'react'
import { Form, InputGroup, Button, ListGroup } from 'react-bootstrap'
import { FaSistrix } from 'react-icons/fa'
import styles from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { autoComplete } from '../../reducer/AutoComplete'


export const SearchForm = () => {
  const [word, setWord] = useState('')
  const dispatch = useDispatch()
  const suggestion = useSelector( state => state.suggestions)
  console.log(suggestion)
  const predict = ( word ) => {
    setWord(word)
    dispatch(autoComplete(word))
  }
  const Suggestion = ({ suggestions }) => {
    console.log(suggestions)
    if(suggestions.length > 0){
      const clicked = (word) => {
        setWord(word)
      }
      return(
        <div>
          <ListGroup>
            {
              suggestions.map(words =>
                <ListGroup.Item key ={words.word} action onClick={() => clicked(words.word)}>{words.word} </ListGroup.Item>
              )
            }
          </ListGroup>
        </div>
      )
    }
  }

  return(
    <div className={styles.form}>
      <Form >
        <div className={styles.div}>
          <InputGroup>
            <Form.Control
              type='text'
              placeholder='Search by word'
              className={styles.input}
              value = {word}
              onChange = {e => predict(e.target.value) }
            />
            <Button className={styles.Icon} type = 'submit'><FaSistrix/></Button>

          </InputGroup>
        </div>
      </Form>
      <Suggestion suggestions={suggestion}/>
    </div>
  )
}
