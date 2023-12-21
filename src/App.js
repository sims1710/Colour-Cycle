import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';

{/* Important Links */}
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>

{/* Main App */}
function App() {
  const[currentColour, setCurrentColour] = useState('#563d7c');
  const [isRunning, setIsRunning] = useState(false);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [increment, setIncrement] = useState(1);

  {/* Set initial background colour */}
  const handleColourChange = (event) => {
    const newColour = event.target.value;
    setCurrentColour(newColour);

    const parsedColor = parseInt(newColour.substring(1), 16);
    setRed((parsedColor >> 16) & 255);
    setGreen((parsedColor >> 8) & 255);
    setBlue(parsedColor & 255);

    document.body.style.backgroundColor = newColour;
  }

  {/* Start/Stop button */}
  const checkIfRunning = () => {
    setIsRunning(!isRunning);
  }

  {/* Update colour */}
  const updateColor = () => {
    setRed((red + increment) % 256);
    setGreen((green + increment) % 256);
    setBlue((blue + increment) % 256);
    const newColour = `#${(red << 16 | green << 8 | blue).toString(16).padStart(6, '0')}`;
    setCurrentColour(newColour);
    document.body.style.backgroundColor = newColour;
  }

  {/* Update colour every 250ms */}
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        updateColor();
      }, 250);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, increment, red, green, blue]);

  {/* Increment value */}
  const handleIncrementChange = (event) => {
    const newIncrement = parseInt(event.target.value, 10);
    setIncrement(isNaN(newIncrement) ? 1 : newIncrement);
  };
  
  return (
    <>
      <div className='header'>
        <HeaderBar/>
      </div>
      
      <div className='wheel'>
        <ColorPicker currentColour={currentColour} handleColourChange={handleColourChange} />
      </div>

      <div className='on-off'>
        <OnOffButton isRunning={isRunning} checkIfRunning={checkIfRunning} />
      </div>

      <div className='input'>
        <InputNum value={increment} handleIncrementChange={handleIncrementChange} />
      </div>
    
    </>
  );
}
export default App;

{/* Header */}
function HeaderBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="text-center w-100">Colour Cycle</Navbar.Brand>
        </Container>
      </Navbar>
      <br />     
    </>
  );
}

{/* Colour Picker */}
function ColorPicker({ currentColour, handleColourChange }) {
  return (
    <>
      <Form.Label htmlFor="exampleColorInput">Pick a colour: </Form.Label>
      <Form.Control
        type="color"
        id="exampleColorInput"
        defaultValue="#563d7c"
        value={currentColour}
        onChange={handleColourChange}
        title="Choose your color"
      />
    </>
  );
}

{/* Buttons */}
function OnOffButton({ isRunning, checkIfRunning }) {
  return (
    <>
      <Button variant="dark" onClick={checkIfRunning}>
        {isRunning ? "Stop" : "Start"}
      </Button>{' '}
    </>
  );
}

function InputNum({ increment, handleIncrementChange, isRunning }) {
  return (
    <div className="input-num-container">
      <Form.Group controlId="incrementInput">
        <Form.Label>Increment Value:</Form.Label>
        <Form.Control
          type="number"
          value={increment}
          onChange={handleIncrementChange}
          disabled={isRunning}
          className="input-num-box"
        />
      </Form.Group>
    </div>
  );
}
