import "./FormFile.scss";

function FormFile({ thumbnail, setThumbnail, saveImage }) {
	function handleImageChange(event) {
		event.preventDefault();

		saveImage(event.target.files[0]);
	}

	return (
		<div className='form-file'>
			<label className='form-file__label' htmlFor='uploadImage'>
				ADD A THUMBNAIL
			</label>
			<input
				type='file'
				accept='image/png, image/jpeg, image/jpg'
				name='uploadImage'
				onChange={handleImageChange}
			></input>
		</div>
	);
}

export default FormFile;
