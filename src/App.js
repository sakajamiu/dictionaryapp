import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import  './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RandomWord from './components/RandomWord'
import Form from './components/Form'

function App() {
  return (
    <div >
      <Navbar/>
      <div className='app'>
        <Container  >
          <Row>
            <Col sm={8}><Form/></Col>
            <Col sm={4}><RandomWord/></Col>
          </Row>
        </Container>
      </div>
      <Footer/>

    </div>
  )
}

export default App
