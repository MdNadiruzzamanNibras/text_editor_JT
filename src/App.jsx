import { useState } from "react";


const App = () => {
  const [text, setText] = useState('10px')
  const handleChange = (event) => {
    setText(event.target.value);
  };
  console.log(text);
  return (
    <div>
      <select onChange={handleChange}>
        <option value="50px">50</option>
        <option value="100px"> 100</option>
      </select>
     <textarea style={{fontSize:`${text}`, width:"500px", height:"100px"}} name="" id="" ></textarea>
    </div>
  );
};

export default App;