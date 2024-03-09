import "./FormFile.scss";

function FormFile({ setThumbnail, setThumbnailFile, thumbnailDefault }) {
	function handleImageChange(event) {
		event.preventDefault();

		// incoming image from form
		const userFile = event.target.files[0];
		setThumbnailFile(userFile);

		if (userFile) {
			const userThumbnail = URL.createObjectURL(userFile);
			setThumbnail(userThumbnail);
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
