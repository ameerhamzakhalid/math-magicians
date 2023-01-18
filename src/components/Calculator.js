import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [inputValue, setInputValue] = useState(0);

  const onClickEventHandler = (e) => {
    const newValue = calculate(inputValue, e.target.innerText);
    setInputValue(newValue);
    const outPut = document.getElementById('output');
    if (newValue.next !== null) {
      outPut.textContent = newValue.next;
    } else {
      outPut.textContent = newValue.total;
    }
  };

  return (
    <div className="calculator-container container">
      <h2 className="calculator-headline container">Let&apos;s do some math!</h2>
      <div className="calculator container">
        <Display />
        <Button text="AC" onClick={onClickEventHandler} />
        <Button text="+/-" onClick={onClickEventHandler} />
        <Button text="%" onClick={onClickEventHandler} />
        <Button className="operator" text="&divide;" onClick={onClickEventHandler} />
        <Button text="7" onClick={onClickEventHandler} />
        <Button text="8" onClick={onClickEventHandler} />
        <Button text="9" onClick={onClickEventHandler} />
        <Button className="operator" text="x" onClick={onClickEventHandler} />
        <Button text="4" onClick={onClickEventHandler} />
        <Button text="5" onClick={onClickEventHandler} id="5" />
        <Button text="6" onClick={onClickEventHandler} />
        <Button className="operator" text="-" onClick={onClickEventHandler} />
        <Button text="1" onClick={onClickEventHandler} />
        <Button text="2" onClick={onClickEventHandler} />
        <Button text="3" onClick={onClickEventHandler} />
        <Button className="operator" text="+" onClick={onClickEventHandler} />
        <Button id="three-spanned" text="0" onClick={onClickEventHandler} />
        <Button text="." onClick={onClickEventHandler} />
        <Button className="operator" text="=" onClick={onClickEventHandler} />
      </div>

    </div>
  );
};

export default Calculator;
