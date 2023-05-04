

function InputForm (props) {
  return (
    <>
      <input
        required={props.required}
        type={props.type}
        minLength={props.minLength}
        maxLength={props.maxLength}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className={`popup__input popup__input_type_${props.name}`}
      />
      <span className={`error input-error-${props.name}`}></span>
    </>
  );
}

export default InputForm;
