import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import Button from "../../components/Button/Button";

function UploadPage() {
	return (
		<>
			<h1 className='upload-page__title'>Upload Video</h1>
			<form>
				<label>VIDEO THUMBNAIL</label>
				<img src={thumbnail} />
				<label htmlFor='upload-title'>TITLE YOUR VIDEO</label>
				<input
					type='input'
					name='upload-title'
					id='upload-title'
					placeholder='Add a title to your video'
				></input>
				<label htmlFor='upload-description'>ADD A VIDEO DESCRIPTION</label>
				<textarea
					name='upload-description'
					id='upload-description'
					placeholder='Add a description to your video'
				></textarea>
				<div>
					<Button type='publish' />
					<Button type='cancel' />
				</div>
				{/* buttons go in a container, need two cancel buttons to switch position in tablet */}
			</form>
		</>
	);
}

export default UploadPage;
