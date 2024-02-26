import "./FormTextArea.scss";

function FormTextArea({ label, name, placeholder }) {
	return (
		<>
			<label className='form-text-area__label' htmlFor={name}>
				{label}
			</label>
			<textarea
				className='form-text-area__field'
				name={name}
				id={name}
				placeholder={placeholder}
			></textarea>
		</>
	);
}

export default FormTextArea;
