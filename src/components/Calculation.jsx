import './styles/Calculation.css';
const Calculation = ({
  bill,
  setBill,
  tipPercent,
  setTipPercent,
  splitWays,
  setSplitWays,
}) => {
  const totalTip = () => {
    return bill * (tipPercent * 0.01);
  };
  const tipCalculation = () => {
    return (Math.round((totalTip() / splitWays) * 100) / 100).toFixed(2);
  };
  const billSplit = () => {
    const tip = totalTip();
    return (Math.round(((bill + totalTip()) / splitWays) * 100) / 100).toFixed(
      2
    );
  };
  const reset = () => {
    setBill(0);
    setTipPercent(0);
    setSplitWays(1);
  };

  return (
    <div className='calculations'>
      <div className='calculation-values'>
        <div className='calculation-labels'>
          <h2>Tip</h2>
          <h4>/Person</h4>
        </div>
        <h3>${tipCalculation()}</h3>
      </div>
      <div className='calculation-values'>
        <div className='calculation-labels'>
          <h2>Total</h2>
          <h4>/ Person</h4>
        </div>
        <h3>${billSplit()}</h3>
      </div>
      <button onClick={(e) => reset()}>Reset</button>
    </div>
  );
};
export default Calculation;
