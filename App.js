// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';




function ImageAndTextExample() {
  const firstName = "Fulla ";  
  const greetingMessage = firstName ? `Hello, ${firstName}!` : "Hello, there!";
  return (
    <>
    
      <Card style={{ width: '40rem', margin: 'auto', padding: '1rem' }}>
        <Card.Img variant="top" src="https://tse2.mm.bing.net/th?id=OIP.XjpUq_bcIcgnMLmT_eidKwHaEc&pid=Api&P=0&h=220" />
        <Card.Body>
          <Card.Text>
          <Name/>
            <Description/>
            <Price/>
          </Card.Text>
        </Card.Body>
      </Card>
      {firstName && (
        <img 
          src="https://tse3.mm.bing.net/th?id=OIP.PDSpTP36Eq4PJjEqmpy20AHaHZ&pid=Api&P=0&h=220" // Replace with a personal image if you have one
          alt="Personal"
          style={{ display: 'block', margin: '20px auto', borderRadius: '50%' }}
        />
      )}
      <div className="text-center mt-3">
        <h4>{greetingMessage}</h4>
      </div>
    </>
    
    
  );
}

export default ImageAndTextExample;