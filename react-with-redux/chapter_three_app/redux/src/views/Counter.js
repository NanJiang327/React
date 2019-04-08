import React from 'react';

const buttonStyle = {
  margin: '10px'
};

function Counter (props) {
  const { caption, onClickIncrementButton, onClickDecrementButton, value } = props
  return (
    <div>
      <button style={buttonStyle} onClick={onClickIncrementButton}>+</button>
      <button style={buttonStyle} onClick={onClickDecrementButton}>-</button>
      <span>{caption} count: {value}</span>
    </div>
  );
}


export default Counter;

