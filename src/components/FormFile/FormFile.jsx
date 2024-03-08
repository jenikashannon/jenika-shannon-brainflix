import "./FormFile.scss";

let file;

function FormFile({
	thumbnail,
	setThumbnail,
	saveImage,
	deleteImage,
	thumbnailDefault,
}) {
	function handleImageChange(event) {
		event.preventDefault();

		// incoming image from form
		const newFile = event.target.files[0];

		// delete old image, if one was saved prior
		if (file) {
			deleteImage();
		}

		// set incoming image as file to save
		file = newFile;

		// if there is an incoming file, save it,
		// otherwise use default thumbnail
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
