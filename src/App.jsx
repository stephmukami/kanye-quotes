import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // State to store the advice message
  const [advice, setAdvice] = useState('Nothing in life is promised except death');

  function getAdvice() {
    fetch('https://api.kanye.rest/')
      .then((res) => res.json())
      .then((data) => {
        // Set the advice message in the state
        setAdvice(data.quote);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="container">
        <h6 className="topic">KANYE WEST SAYS</h6>
        {/* Display the advice message from the state */}
        <p className="advice">{advice}</p>

        
        <div className="bottom-image">
          <div className="dice-background"> </div>
          {/* Button to get new advice */}
          <svg className=' dice-two' onClick={getAdvice} width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default App;
