import "./FormInput.scss";

function FormInput({ label, name, placeholder }) {
	return (
		<>
			<label className='form-input__label' htmlFor={name}>
				{label}
			</label>
			<input
				className='form-input__field'
				type='input'
				name={name}
				id={name}
				placeholder={placeholder}
			></input>
		</>
	);
}

export default FormInput;
