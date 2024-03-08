import "./FormFile.scss";

function FormFile({ thumbnail, setThumbnail, saveImage, thumbnailDefault }) {
	function handleImageChange(event) {
		event.preventDefault();
		const file = event.target.files[0];

		if (file) {
			saveImage(file);
		} else {
			setThumbnail(thumbnailDefault);
		}
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
