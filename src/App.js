import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Calculation from './components/Calculation';

function App() {
  const [bill, setBill] = useState(0);
  const [tipPercent, setTipPercent] = useState(10);
  const [splitWays, setSplitWays] = useState(1);

  return (
    <div className='App'>
      <h1>Tip Calculator</h1>
      <div className='Components'>
        <Calculator
          bill={bill}
          setBill={setBill}
          tipPercent={tipPercent}
          setTipPercent={setTipPercent}
          splitWays={splitWays}
          setSplitWays={setSplitWays}
        />
        <Calculation
          bill={bill}
          tipPercent={tipPercent}
          splitWays={splitWays}
        />
      </div>
    </div>
  );
}

export default App;
