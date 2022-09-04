import './App.css';
import React from 'react';
import { evaluate } from 'mathjs';
import { useState } from 'react';
import Boton from './components/boton.jsx';
import ClearBtn from './components/clear.jsx';
import Output from './components/output.jsx';
import Input from './components/input.jsx'

function App() {

  const [num, setNum] = useState('0');

  const regex = /\d+\.\d+\.$|\.\.|^\.|^\/|^\*|^\+|^-|--|\+\+|\/\/|\*\*|\+-|-\+|\*\+|\*\/|\/\*/g;
  const regexDot = /\d+\.\d+$/g

  const writeNum = (val) =>{
    if(num[0] === "0"){
        setClear();
        setNum(val);
    }else if (regexDot === false){
      setNum(num.substring(0, num.length - 1));
    } else if(regex.test(num) === true){
      setNum(num.substring(0, num.length - 1));
      console.log(num)
    } 
    else{
      setNum(num + val);
    }
  }

  const setClear = () =>{
    console.clear();
    setNum('0');
  }

  const result = () =>{
    setNum(evaluate(num));
  }

  return (
    <div className="App">
      <div className='calculator'>
      <div className='screen'>
        <Output>{num}</Output>
        <Input>{num}</Input>
      </div>
      <div className='row'>
        <Boton num="seven" event={writeNum}>7</Boton>
        <Boton num="eight" event={writeNum}>8</Boton>
        <Boton num="nine" event={writeNum}>9</Boton>
        <Boton num="divide" event={writeNum}>/</Boton>
      </div>
      <div className='row'>
        <Boton num="four" event={writeNum}>4</Boton>
        <Boton num="five" event={writeNum}>5</Boton>
        <Boton num="six" event={writeNum}>6</Boton>
        <Boton num="multiply" event={writeNum}>*</Boton>
      </div>
      <div className='row'>
        <Boton num="one" event={writeNum}>1</Boton>
        <Boton num="two" event={writeNum}>2</Boton>
        <Boton num="three" event={writeNum}>3</Boton>
        <Boton num="add" event={writeNum}>+</Boton>
      </div>
      <div className='row'>
        <ClearBtn id="clear"event={setClear}/>
        <Boton num="zero" event={writeNum}>0</Boton>
        <Boton num="subtract" event={writeNum}>-</Boton>
        <Boton num="decimal" event={writeNum}>.</Boton>
      </div>
      <div className='row'>
      <Boton num="equals" event={result}>=</Boton>
      </div>
      </div>
    </div>
  );
}

export default App;
