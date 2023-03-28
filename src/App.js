import { useState } from 'react';
import './App.css';
import ButtonClicked from './component/buttonclicked';

function App() {
const[count,setCount]=useState(0);
const[array,setarray]=useState([])

  
const evenNumbers= array.filter((x)=> x%2===0)
const oddNumbers= array.filter((x)=> x%2!==0)
const SquareNumbers= array.map((x) =>x*x  )
// 
console.log("hi ji",array)

function increment(){
if (count>=0)
  {
  setCount(count+1);

  setarray([...array,count+1])
}
}
function decrement(){
if(count>0)
  {
  setCount(count-1);
}
}



  return (
    <div className="App">
     <button onClick={increment}> +</button>
     <h3> Counter app{count}</h3>
       <button onClick={decrement}> - </button>
  <div style={{display:"flex",flexDiretion:"row",gap:'10px'}}>

<div>
<ButtonClicked title="Numbers" list={array} />
</div>

<br></br>
<div>
< ButtonClicked title="EvenNumbers" list={evenNumbers} />
</div>
<br></br>
<div>
<ButtonClicked title="OddNumbers" list={oddNumbers} />
</div>
<div>
<ButtonClicked title="SquareNumbers" list={SquareNumbers} />
</div>
</div>
    </div>
  );
}

export default App;


// import React, { useState } from 'react';

//  export function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }