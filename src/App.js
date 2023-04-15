import { useState } from 'react';
import './App.css';
import  ListNumbers from './component/ListNumbers';

function App() {
  const [count, setCount] = useState(0);
  const [array, setarray] = useState([])


  const evenNumbers = array.filter((x) => x % 2 === 0)
  const oddNumbers = array.filter((x) => x % 2 !== 0)
  const squareNumbers = array.map((x) => x * x)
  // 
  console.log("hi ji", array)

  function increment() {
    if (count >= 0) {
      setCount(count + 1);

      setarray([...array, count + 1])
    }
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }



  return (
    <div className="App">
      <button onClick={increment}> +</button>
      <h3> Counter app{count}</h3>
      <button onClick={decrement}> - </button>
      <div style={{ display: "flex", flexDiretion: "row", gap: '20px' }}>

        <div>
          <ListNumbers title="Numbers" list={array} />
        </div>


        <div>
          <ListNumbers title="EvenNumbers" list={evenNumbers} />
        </div>

        <div>
          <ListNumbers title="OddNumbers" list={oddNumbers} />
        </div>
        <div>
          <ListNumbers  title="SquareNumbers" list={squareNumbers} />
        </div>

      </div>
    </div>
  );
}

export default App;
