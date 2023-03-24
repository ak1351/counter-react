import { useState } from 'react';
import './App.css';

function App() {
const[ count,setCount]=useState(0);
const[array,setarray]=useState([])

  
const num= array.filter((x)=> x%2===0)
const num1= array.filter((x)=> x%2!==0)
const num2= array.map((x) =>x*x  )
// 
console.log("hi ji",num2)

function incre()
  {
  setCount(count+1);

  setarray([...array,count])
}
function decre()
  {
  setCount(count-1);
}




  return (
    <div className="App">
     <button onClick={incre}> +</button>
     <h3>  increment in{ count}</h3>
       <button onClick={decre}> - </button>
  <div style={{display:"flex",flexDiretion:"row",gap:'10px'}}>
<div  >< h2> numbers</h2> {array.map((data)=><li> {data}</li>)}
</div>
<br></br>
<div>
<h2>  even</h2>{num.map((data)=><li> {data}</li>)} 
</div>
<br></br>
<div>
<h2>  odd</h2>{num1.map((data)=><li> {data}</li>)} 
</div>
<div>
<h2>  sqrt</h2>{num2.map((data)=><li> {data}</li>)} 
</div>
</div>
    </div>
  );
}

export default App;
