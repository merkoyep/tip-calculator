import React from 'react';
import './styles/Calculator.css';
const Calculator = ({
  bill,
  setBill,
  tipPercent,
  setTipPercent,
  splitWays,
  setSplitWays,
}) => {
  return (
    <form className='calculator-form'>
      <label className='input-label'>
        Total Bill $
        <input
          type='number'
          inputmode='numeric'
          pattern='[0-9]*'
          value={bill}
          onChange={(e) => setBill(parseFloat(e.target.value))}
        />
      </label>
      <label className='input-label'>
        Tip %
        <input
          type='number'
          inputmode='numeric'
          pattern='[0-9]*'
          value={tipPercent}
          onChange={(e) => setTipPercent(parseFloat(e.target.value))}
        />
      </label>
      <label className='input-label'>
        Number of People
        <input
          type='number'
          value={splitWays}
          min='1'
          onChange={(e) => setSplitWays(parseFloat(e.target.value))}
        />
      </label>
    </form>
  );
};
export default Calculator;
