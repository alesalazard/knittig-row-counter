import './App.css';
import Button from './components/Button';

function App() {
  const clickHandler = () => {
    console.log('click');
  }

  const resetHandler = () => {
    console.log('reset');
  }

  return (
    <div className="App">
      <h1>Knitting Row Counter</h1>
      <div className='main-container'>
        <Button 
          isAdd={true}
          clickHandler={clickHandler}
          text='Add Row' />
        <Button 
          isAdd={false}
          clickHandler={resetHandler}
          text='Reset Row'
        />
      </div>
    </div>
  );
}

export default App;
