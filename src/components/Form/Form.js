
import React, { useState } from 'react'
import { Form, InputGroup, Button, ListGroup } from 'react-bootstrap'
import { FaSistrix } from 'react-icons/fa'
import styles from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { autoComplete , cleared } from '../../reducer/AutoComplete'
import { searchWord } from '../../reducer/SearchWord'
import Word from '../Word'


export const SearchForm = () => {
  const [word, setWord] = useState('')
  const dispatch = useDispatch()
  const suggestion = useSelector( state => state.suggestions)

  const predict = ( word ) => {
    setWord(word)
    dispatch(autoComplete(word))
  }

  const Suggestion = ({ suggestions }) => {

    if(suggestions.length > 0){
      const clicked = (word) => {
        setWord(word)
      }

      return(
        <div>
          <ListGroup >
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

  const search = (event) => {
    event.preventDefault()
    dispatch(cleared())
    dispatch(searchWord(word))
    setWord('')

  }

  return(
    <div className={styles.form}>
      <Form  onSubmit= { search }>
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
      <Word/>
    </div>
  )
}
