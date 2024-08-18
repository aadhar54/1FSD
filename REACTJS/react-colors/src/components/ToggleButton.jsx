
const ToggleButton = ({toggleTxtColor, isTxtColorBlack}) => {

  let nextTextColor = isTxtColorBlack ? 'White' : 'Black';
  return (
    
    <button
      type="button"
      style={{cursor: 'pointer'}}
      onClick={() => {toggleTxtColor(!isTxtColorBlack)}}
    >
      Toggle Text Color to {nextTextColor}
    </button>
  )
}

export default ToggleButton