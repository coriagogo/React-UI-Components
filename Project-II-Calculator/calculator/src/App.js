import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends React.Component {
  render() {
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
        <ButtonContainer className="clear-btn">
          <ActionButton className="large-text" text="clear" />
          <NumberButton btnName="op-btn" text="/" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton btnName="num-btn" text="7" />
          <NumberButton btnName="num-btn" text="8" />
          <NumberButton btnName="num-btn" text="9" />
          <NumberButton btnName="op-btn" text="X" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton btnName="num-btn" text="4" />
          <NumberButton btnName="num-btn" text="5" />
          <NumberButton btnName="num-btn" text="6" />
          <NumberButton btnName="op-btn" text="-" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton btnName="num-btn" text="1" />
          <NumberButton btnName="num-btn" text="2" />
          <NumberButton btnName="num-btn" text="3" />
          <NumberButton btnName="op-btn" text="+" />
        </ButtonContainer>
        <ButtonContainer>
          <ActionButton className="large-text" text="0" />
          <NumberButton btnName="op-btn" text="=" />
        </ButtonContainer>
      </div>
    );    
  };
};

export default App;
