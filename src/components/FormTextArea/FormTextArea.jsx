import "./FormTextArea.scss";

function FormTextArea({ label, name, placeholder, type }) {
	return (
		<div
			className={
				type === "comment"
					? "form-text-area form-text-area--comment"
					: "form-text-area"
			}
		>
			<label className='form-text-area__label' htmlFor={name}>
				{label}
			</label>
			<textarea
				className={
					type === "comment"
						? "form-text-area__field form-text-area__field--comment"
						: "form-text-area__field"
				}
				name={name}
				id={name}
				placeholder={placeholder}
			></textarea>
		</div>
	);
}

export default FormTextArea;
