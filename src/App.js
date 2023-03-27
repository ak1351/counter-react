import { useState } from 'react';
import './App.css';
import CalculateCount from './component/CalculateCount';

function App() {
const[count,setCount]=useState(1);
const[array,setarray]=useState([])

  
const num= array.filter((x)=> x%2===0)
const num1= array.filter((x)=> x%2!==0)
const num2= array.map((x) =>x*x  )
// 
console.log("hi ji",num2)

function increment(){
if (count>=0)
  {
  setCount(count+1);

  setarray([...array,count])
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
     <h3> Counter app</h3>
       <button onClick={decrement}> - </button>
  <div style={{display:"flex",flexDiretion:"row",gap:'10px'}}>

<div>
<CalculateCount title="Numbers" numArr={array} />
</div>

<br></br>
<div>
<CalculateCount title="Even" numArr={num} />
</div>
<br></br>
<div>
<CalculateCount title="Odd" numArr={num1} />
</div>
<div>
<CalculateCount title="even" numArr={num2} />
</div>
</div>
    </div>
  );
}

export default App;
