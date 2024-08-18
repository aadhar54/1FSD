

const Square = ({colorValue, hexValue, isTxtColorBlack}) => {

  return (
    <section 
      className="square" 
      style={{
        backgroundColor: colorValue,
        color: (isTxtColorBlack == true) ? "#000" : "#FFF"
    }}>
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  )
}


Square.defaultProps = {
  colorValue: "cyan"
}

export default Square