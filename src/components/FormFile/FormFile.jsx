import "./FormFile.scss";

function FormFile() {
	return (
		<div className='form-file'>
			<label className='form-file__label' htmlFor='uploadImage'>
				ADD A THUMBNAIL
			</label>
			<input
				type='file'
				accept='image/png, image/jpeg, image/jpg'
				name='uploadImage'
			></input>
		</div>
	);
}

export default FormFile;
