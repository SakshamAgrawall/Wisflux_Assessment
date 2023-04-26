import './App.css';
import { useState,useEffect } from 'react';
function App() {
  const [count, setCount] = useState(0);

  const func=async()=>{
      const response = await fetch('http://localhost:8888');
      const json = await response.json();
      setCount(json.count);
  }
  useEffect(() => {
      func();
    },[]);

  return (
    
    <div className="main">
    <h3>  Visitor Count: {count}</h3>
    
    </div>
  );
}

export default App;
