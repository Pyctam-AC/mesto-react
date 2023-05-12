import { forwardRef } from 'react';

const InputAvatarForm = forwardRef(function InputAvatarForm(props, ref) {
  return (
    <>
      <input
        required={props.required}
        type={props.type}
        minLength={props.minLength}
        maxLength={props.maxLength}
        name={props.name}
        ref={ref}
        placeholder={props.placeholder}
        className={`popup__input popup__input_type_${props.name}`}
      />
      <span className={`error input-error-${props.name}`}>
        {props.name.message}
      </span>
    </>
  );
})

export default InputAvatarForm;
