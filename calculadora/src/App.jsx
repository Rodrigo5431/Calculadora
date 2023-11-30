import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('0');


  function number(e){
var num = e.target.value
setResult(result+ num)

}
function reset(){
setResult(0)
}
  return (

    <body>
      <div className='buttom'>
      <div className='tela'>
        <h1>
          {result}
          </h1>
      </div>
        <div className='line'>
          <button onClick={number} value={7}>7</button>
          <button onClick={number}value={8}>8</button>
          <button onClick={number} value={9}>9</button>
          <button onClick={reset}>C</button>
        </div>
        <div className='line'>
          <button onClick={number} value={4}>4</button>
          <button onClick={number} value={5}>5</button>
          <button onClick={number} value={6}>6</button>
          <button>X</button>
        </div>
        <div className='line'>

          <button onClick={number} value={1}>1</button>
          <button onClick={number} value={2}>2</button>
          <button onClick={number} value={3}>3</button>
          <button>+</button>
        </div>

        <div className='line'>
          <button >,</button>
          <button onClick={number} value={0}>0</button>
          <button>/</button>
          <button>-</button>
        </div>

        <div className='line' id='all'>
          <button> =</button>
        </div>
      </div>

    </body>
  );
}

export default App;
