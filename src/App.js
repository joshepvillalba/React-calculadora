import './App.css';
import logo from './images/logo.png';
import { Button } from './components/Button';
import { Screen } from './components/Screen';
import { ClearButton } from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addToInput = (val) => {
    setInput(input + val);
  }

  const handleClear = () => {
    setInput('');
  }

  const result = () => {
    if (input !== '') {
      try {
        setInput(evaluate(input));
      } catch (error) {
        setInput('Error');
      }
 
    }
  }

  return (
    <div className='App'>
      <div className='logo-container'>
        <img src={logo} alt='logo' className='logo' />
      </div>

      <div className='content-calculator'>
        <Screen input = { input }/>

        <div className='row'>
          <Button click = { addToInput }>1</Button>
          <Button click = { addToInput }>2</Button>
          <Button click = { addToInput }>3</Button>
          <Button click = { addToInput }>+</Button>
        </div>

        <div className='row'>
          <Button click = { addToInput }>4</Button>
          <Button click = { addToInput }>5</Button>
          <Button click = { addToInput }>6</Button>
          <Button click = { addToInput }>-</Button>
        </div>

        <div className='row'>
          <Button click = { addToInput }>7</Button>
          <Button click = { addToInput }>8</Button>
          <Button click = { addToInput }>9</Button>
          <Button click = { addToInput }>*</Button>
        </div>

        <div className='row'>
          <Button click = { result }>=</Button>
          <Button click = { addToInput }>0</Button>
          <Button click = { addToInput }>.</Button>
          <Button click = { addToInput }>/</Button>
        </div>

        <div className='row'>
          <ClearButton clear = {handleClear}>CLEAR</ClearButton>
        </div>

      </div>
    </div>
  );
}

export default App;
