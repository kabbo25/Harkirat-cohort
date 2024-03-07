import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [count,setCount]=useState(0);
  return (
      <div>
        <CustomButton count={count} setCount={setCount}></CustomButton>
      </div>
  )
}
const CustomButton=(proms)=>{
  function increaseCount(){
    proms.setCount(proms.count+1);
  }
  return <button onClick={increaseCount}>Counter {proms.count}</button>
}

export default App;
