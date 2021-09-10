import React from 'react';
import "./Selector.scss";

function Selector(props) {
  const options = props.options;
  const onChange = props.onChange;
  const value = props.defaultValue;
  const id = props.id;
  const className = props.className;
  const label = props.label
  
  const selectOptions = options.map( option => {
    return <option key={option}>{option}</option>
  })

  return (
    <div className="Selector">
      <label 
        htmlFor={id}
        className="Selector__label"
      >
        {label}
      </label>

      <select
        autoFocus={true}
        id={id}
        value={value}
        onChange={onChange}
        className={`Selector_wrapper ${className}`}
      >
        {selectOptions}
      </select>
    </div>
  )
}

export default Selector;