/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import React from 'react';
import { evaluate } from 'mathjs';
import { useState, useEffect } from 'react';
import Boton from './components/boton.jsx';
import ClearBtn from './components/clear.jsx';
import Output from './components/output.jsx';

function App() {

  const [num, setNum] = useState('0');
  const[booleanDot, setBooleanDot] = useState(true);
  const[booleanPlus, setBooleanPlus] = useState(true);
  const[booleanMinus, setBooleanMinus] = useState(false);
  const[booleanMultiply, setBooleanMultiply] = useState(true);
  const[booleanDivision, setBooleanDivision] = useState(true);

  const regexDot = /\d+\.$|\d+\.\d+$/g;
  const regexPlusMinus = /\+$|-$/g;
  const regexMultiplyDivision = /\*$|\//g;
  const regexReplacePlus = /\+-$/g;
  const regexReplaceMinus = /-\+$/g;

  useEffect(() => {
    if(num === "0"){
      setBooleanDot(true);
      setBooleanPlus(true);
      setBooleanDivision(true);
      setBooleanMultiply(true);
    }else if(regexDot.test(num)){
      setBooleanDot(true);
      setBooleanPlus(false);
      setBooleanMinus(false);
      setBooleanDivision(false);
      setBooleanMultiply(false);
    }else{
      setBooleanDot(false);
      setBooleanPlus(false);
      setBooleanMinus(false);
      setBooleanDivision(false);
      setBooleanMultiply(false);
      if(regexPlusMinus.test(num)){
        setBooleanDot(true);
        setBooleanPlus(true);
        setBooleanMinus(true);
        setBooleanDivision(true);
        setBooleanMultiply(true);
        if(regexReplacePlus.test(num)){
          setNum(num.slice(0,-2) + "-")
        }else if(regexReplaceMinus.test(num && num.length !== 0)){
          setNum(num.slice(0,-2) + "+")
        }
        if(num[num.length - 1] === "+"){
          setBooleanDot(true);
          setBooleanPlus(true);
          setBooleanMinus(false);
          setBooleanDivision(true);
          setBooleanMultiply(true);
        }else if(num[num.length - 1] === "-" && num.length !== 1){
          setBooleanDot(true);
          setBooleanPlus(false);
          setBooleanMinus(true);
          setBooleanDivision(true);
          setBooleanMultiply(true);
        }
      }else{
        setBooleanDot(false);
        setBooleanPlus(false);
        setBooleanMinus(false);
        setBooleanDivision(false);
        setBooleanMultiply(false);
        if(regexMultiplyDivision.test(num)){
          setBooleanDot(true);
          setBooleanPlus(true);
          setBooleanMinus(false);
          setBooleanDivision(true);
          setBooleanMultiply(true);
        }else{
          setBooleanDot(false);
          setBooleanPlus(false);
          setBooleanMinus(false);
          setBooleanDivision(false);
          setBooleanMultiply(false);
        }
      }
    } }, [num, regexDot, regexPlusMinus, regexMultiplyDivision, regexReplacePlus, regexReplaceMinus])

  const writeNum = val =>{
    try{
    if(num[0] === "0"){
      setNum(val);
      setBooleanDot(false);
      setBooleanMinus(false);
      setBooleanPlus(false);
      setBooleanDivision(false);
      setBooleanMultiply(false);
    }else if(num.length >= 19){
      setNum("Límite excedido");
    }else if(num === "Límite excedido"){
      setNum(val);
    }else{
      setNum(num + val);
    }
    } catch(error){
      setNum("ERROR")
    }
  }
  
  const setClear = () =>{
    console.clear();
    setNum('0');
  }

  const backSpace = () =>{
    if(num !== "0" && num !== "ERROR" && num !== "Límite excedido"){
    setNum(num.slice(0,-1));
      if(num.length === 1){
        setNum("0");
      }
    }
  }

  const result = () =>{
    setNum(evaluate(num));
  }

  return (
    <div className="App">
      <div className='calculator'>
      <div className='screen'>
        <Output>{num}</Output>
      </div>
      <div className='row'>
        <Boton clase="button" num="seven" event={writeNum}>7</Boton>
        <Boton clase="button" num="eight" event={writeNum}>8</Boton>
        <Boton clase="button" num="nine" event={writeNum}>9</Boton>
        <ClearBtn id="backspace" event={backSpace}>DEL</ClearBtn>  
      </div>
      <div className='row'>
        <Boton clase="button" num="four" event={writeNum}>4</Boton>
        <Boton clase="button" num="five" event={writeNum}>5</Boton>
        <Boton clase="button" num="six" event={writeNum}>6</Boton>
        <ClearBtn id="clear"event={setClear}>AC</ClearBtn>
      </div>
      <div className='row'>
        <Boton clase="button" num="one" event={writeNum}>1</Boton>
        <Boton clase="button" num="two" event={writeNum}>2</Boton>
        <Boton clase="button" num="three" event={writeNum}>3</Boton>
        <Boton disable={booleanPlus} clase="operadores button" num="add" event={writeNum}>+</Boton>
      </div>
      <div className='row'>
        <Boton disable={booleanMinus} clase="operadores button" num="subtract" event={writeNum}>-</Boton>
        <Boton clase="button" num="zero" event={writeNum}>0</Boton>
        <Boton disable={booleanDivision} clase="operadores button" num="divide" event={writeNum}>/</Boton>
        <Boton disable={booleanMultiply} clase="operadores button" num="multiply" event={writeNum}>*</Boton>
      </div>
      <div className='row'>
        <Boton clase="button" num="equals" event={result}>=</Boton>
        <Boton disable={booleanDot} clase="operadores button" num="decimal" event={writeNum}>.</Boton>
      </div>
      </div>
    </div>
  );
}

export default App;
