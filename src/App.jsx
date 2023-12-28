import { useEffect, useState } from "react";


const App = () => {
  const Permanent =['Permanent Marker', 'cursive']
  const [text, setText] = useState('20px')
  const [color, setColor] = useState('black')
  const [content, setContent] = useState('')
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
  const handleSumit = () => {
     const inputValue = document.getElementById("textInput").value;
    setContent(inputValue);
    localStorage.setItem('storedContent', inputValue);
  }
  useEffect(() => {
    const storedContent = localStorage.getItem('storedContent');
    if (storedContent) {
      setContent(storedContent);
    }

  },[])
  return (
    <div className="container mx-auto ">
     
      <div className="flex  justify-center">
        <div className="mt-40">
          <input className="w-96 border-gray-500 border-2" style={{ fontSize: text, fontFamily: font, color: color }} name="" id="textInput" />
          <p>{ content}</p>
      </div>
        <div className="flex ml-14 mt-36 flex-col">
          <select onChange={fontChange}>
        <option value="">Regular</option>
        <option value="Titillium Web">Titillium</option>
        <option value='Roboto'> Roboto</option>
        <option value={Permanent}> Permanent</option>
      </select>
        
          <div className="mt-16">
            <select onChange={handleChange}>
        <option value="20px">20</option>
        <option value="50px">50</option>
        <option value="100px"> 100</option>
      </select>
       <select className="capitalize" name="" id="" onChange={colorChange}>
        <option  value="black ">Black</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
      </select>
          </div>
          <button className="mt-28 px-6 py-1 border-2" onClick={handleSumit}>Add Text</button>
     </div>
       </div>
    </div>
  );
};

export default App;