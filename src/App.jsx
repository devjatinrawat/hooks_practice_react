// import { useState} from "react";


// function App() {
  
//   const [count , setCount ] = useState(0);

//   let incrementHandler = () => {
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <h1 >counter app using react</h1>
//       <button onClick={incrementHandler}>
//         you clicked me {
//           count
//         } times. 
//       </button>
//     </>
//   )
// }

// export default App
// counter logic using useState 

// text string input 

import { useState } from 'react';

export default function MyInput() {
  const [text, setText] = useState('hello');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText('hello')}>
        Reset
      </button>
    </>
  );
}


