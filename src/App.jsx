import { useState } from "react";


const App = () => {
  const Permanent =['Permanent Marker', 'cursive']
  const [text, setText] = useState('20px')
  const [color, setColor] = useState('black')
  const [font, setFont] = useState('')
  const handleChange = (event) => {
    setText(event.target.value);
    
  };
  const colorChange = (event) => {
    setColor(event.target.value);
    
  };
  const fontChange = (event) => {
    setFont(event.target.value);
    
  };
  console.log(text, color);
  return (
    <div>
      <div>
         <select name="" id="" onChange={colorChange}>
        <option value="black">black</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
      </select>
      <select onChange={handleChange}>
        <option value="20px">20</option>
        <option value="50px">50</option>
        <option value="100px"> 100</option>
      </select>
      <select onChange={fontChange}>
        <option value="">Regular</option>
        <option value="Titillium Web">Titillium</option>
        <option value='Roboto'> Roboto</option>
        <option value={Permanent}> Permanent</option>
      </select>
     </div>
     <textarea style={{fontSize:text, fontFamily:font, width:"1500px", height:"1000px", color:color}} name="" id="" ></textarea>
    </div>
  );
};

export default App;