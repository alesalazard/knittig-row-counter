import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [numRows, setNumRows] = useState(0);

  const clickHandler = () => {
    setNumRows(numRows + 1);
  }
  const returnHandler = () => {
    setNumRows(numRows - 1);
  }
  const resetHandler = () => {
    setNumRows(0);
  }
  return (
    <div className="App">
      <h1>Knitting Rows Counter</h1>
      <Counter
        clickNum={numRows} />
      <div className='button-container'>
        <Button 
          isAdd={true}
          clickHandler={clickHandler}
          text='Add Row' />
        <Button 
          isAdd={false}
          clickHandler={returnHandler}
          text='Return Row'/>
        <button onClick={resetHandler}
          className='reset'>
            Reset
        </button>
      </div>
      <footer className='footer'>Created with ღ by AleSalazarD</footer>
    </div>
  );
}
export default App;
