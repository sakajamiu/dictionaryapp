import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import image from './Image/logo.png'
import styles from './index.module.css'
import { FaGlobeAmericas } from 'react-icons/fa'


export const Header = () => {

  return(
    <Navbar  expand="md"  className={styles.navbar} variant ="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img  className = {styles.logo}src ={image} alt ='logo'/>  {' '} Dictionary
        </Navbar.Brand>
        <Nav className="justify-content-end">

          <Navbar.Brand  className ={styles.english}><FaGlobeAmericas/> { ' ' } English </Navbar.Brand>
        </Nav>
      </Container>
    </Navbar>
  )
}
