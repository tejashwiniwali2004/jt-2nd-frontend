import React,{ useState } from 'react';

const Counter = () => {
  const[count,setCount]=useState(0);

  const increment =()=>{
    setCount(count+1);
  };

    const decrement =()=>{
    setCount(count-1);
  };

  return (
    
    <div>
        <h3>Counter page</h3>
      <p>Count:{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      
    </div>

    
  );
};

export default Counter;