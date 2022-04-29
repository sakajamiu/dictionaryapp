import React from 'react'
import { Navbar,  Container } from 'react-bootstrap'
import styles from './index.module.css'
import { FaCopyright } from 'react-icons/fa'


export const Footer = () => {

  return(
    <Navbar  expand="md"  className={styles.navbar} variant ="dark" fixed='bottom'>
      <Container>
        <Navbar.Brand ><FaCopyright/>{ ' ' } Jamiu Saka 2022</Navbar.Brand>
      </Container>
    </Navbar>
  )
}
