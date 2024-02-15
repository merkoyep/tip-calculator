import './styles/Calculation.css';
const Calculation = ({ bill, tipPercent, splitWays }) => {
  const totalTip = () => {
    return bill * (tipPercent * 0.01);
  };
  const tipCalculation = () => {
    return Math.round((totalTip() / splitWays) * 100) / 100;
  };
  const billSplit = () => {
    const tip = totalTip();
    console.log({ bill }, { tip }, { splitWays });
    return (bill + totalTip()) / splitWays;
  };

  return (
    <div className='calculations'>
      <div className='tip'>
        <h2>Tip</h2>
        <p>${tipCalculation()}</p>
      </div>
      <div className='split'>
        <h2>Total per Person</h2>
        <p>${billSplit()}</p>
      </div>
    </div>
  );
};
export default Calculation;
