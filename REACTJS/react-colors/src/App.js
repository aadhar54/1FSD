import { useState } from "react";
import Square from "./components/Square";
import Form from "./components/Form";

function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isTxtColorBlack, toggleTxtColor] = useState(false)

  return (
    <div className="App">
      <Square colorValue={colorValue} hexValue={hexValue} isTxtColorBlack={isTxtColorBlack}/>
      <Form colorValue={colorValue} setColorValue={setColorValue} setHexValue={setHexValue} toggleTxtColor={toggleTxtColor} isTxtColorBlack={isTxtColorBlack}/>
    </div>
  );
}

export default App;