import "./InputForm.scss";

function InputForm(props) {
  const placeholder = props.placeholder;
  const id = props.id;
  const className = props.className;
  const rows = props.rows;

  return (
    <textarea
      id={id}
      className={`InputForm__wrapper ${className}`}
      type="text"
      placeholder={placeholder}
      rows={rows}
    >
    </textarea>
  )
}

export default InputForm;