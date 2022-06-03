import React, { useState } from "react";
const Form = () => {
    const [height, setHeight] = useState(0);
  const [mass, setMass] = useState(0);
  const [bmi, setBmi] = useState(0);

  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0;
    if (!formValid) {
      return;
    }
    const bmi = (mass / (height*height))*10000 ;
    setBmi(bmi);
  };



    return ( 
        
   <div class="container2">
      
            
    <div class="brand-logo"></div>
    <div class="brand-title">LOSE-WEIGHT!</div>
    <div class="inputs">
      <label>Weight</label>
      <input type="" placeholder="enter weight in KG" value={mass} onChange={(e) => setMass(e.target.value)} />
      <label>Height</label>
      <input  placeholder="enter height in CM" value={height} onChange={(e) => setHeight(e.target.value)} />
      <button type="submit" onClick={calculate}>CALCULATE!</button>
      <button><a href="/">Back</a></button>
    </div>
    <p>bmi: {bmi}</p>
     
    

     
  </div>
   
  
  
  
  );
}
 
export default Form;