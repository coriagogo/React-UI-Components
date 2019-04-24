import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = props => {  
  return (
    <div className="calcContainer">
        {/* <h3>Welcome to React Calculator</h3>
        <p>
          We have given you a starter project. You'll want to build out your
          components in their respective files, remove this code and replace it
          with the proper components.
        </p>
        <p>
          <strong>
            Don't forget to `default export` your components and import them here
            inside of this file in order to make them work.
          </strong>
        </p> */}
      <CalculatorDisplay />
      <ButtonContainer>
        <ActionButton className="clear-text" text="clear" />
        <NumberButton btnStyle="op-btn" text="&#247;" />
      </ButtonContainer>
      <ButtonContainer>
        <NumberButton btnStyle="num-btn" text="7" />
        <NumberButton btnStyle="num-btn" text="8" />
        <NumberButton btnStyle="num-btn" text="9" />
        <NumberButton btnStyle="op-btn" text="x" />
      </ButtonContainer>
      <ButtonContainer>
        <NumberButton btnStyle="num-btn" text="4" />
        <NumberButton btnStyle="num-btn" text="5" />
        <NumberButton btnStyle="num-btn" text="6" />
        <NumberButton btnStyle="op-btn" text="-" />
      </ButtonContainer>
      <ButtonContainer>
        <NumberButton btnStyle="num-btn" text="1" />
        <NumberButton btnStyle="num-btn" text="2" />
        <NumberButton btnStyle="num-btn" text="3" />
        <NumberButton btnStyle="op-btn" text="+" />
      </ButtonContainer>
      <ButtonContainer>
        <ActionButton className="num-btn" text="0" />
        <NumberButton btnStyle="op-btn" text="=" />
      </ButtonContainer>
    </div>
  );   
};

export default App;
