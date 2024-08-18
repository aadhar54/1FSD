import colorNames from "colornames";
import ToggleButton from "./ToggleButton";


const Form = ({setColorValue, colorValue, setHexValue, toggleTxtColor, isTxtColorBlack}) => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>

        <label>Add color name</label>
        <input
          autoFocus
          type="text"
          placeholder="Add color name"
          required
          value={colorValue}
          onChange={(e) => {
            setColorValue(e.target.value)
            setHexValue(colorNames(e.target.value));
          }}
        />

      <ToggleButton toggleTxtColor={toggleTxtColor} isTxtColorBlack={isTxtColorBlack}/>

      </form>
    </>
  )
}

export default Form