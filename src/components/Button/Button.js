import "./Button.scss"

function Button(props) {
  const id = props.id;
  const className = props.className;
  const text = props.text 

  return (
    <button
      id={id}
      className={`Button ${className}`}
    >
      {text}
    </button>
  )
}

export default Button;