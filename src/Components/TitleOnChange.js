import React, { useState } from 'react';

const TitleOnChange = () => {
  const [D, setD] = useState('');
  
  const handleButtonClick = () => {
    document.title = D; // Set document title to the current value of D
  };

  const handleChange = (event) => {
    setD(event.target.value); // Update D whenever input changes
  };

  return (
    <div>
      <h4>Set Document Title on Button Click</h4>
      <input type="text" value={D} onChange={handleChange} placeholder="Enter value for D"/><br></br>
      <button onClick={handleButtonClick}>Set Title</button>
    </div>
  );
};

export default TitleOnChange;
