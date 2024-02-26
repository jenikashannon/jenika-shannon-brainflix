import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import FormInput from "../../components/FormInput/FormInput";
import FormTextArea from "../../components/FormTextArea/FormTextArea";
import Button from "../../components/Button/Button";

function UploadPage() {
	return (
		<>
			<h1 className='upload-page__title'>Upload Video</h1>
			<form>
				<label className='upload-page__label'>VIDEO THUMBNAIL</label>
				<img className='upload-page__thumbnail' src={thumbnail} />
				<FormInput
					label='TITLE YOUR VIDEO'
					name='upload-title'
					placeholder='Add a title to your video'
				/>
				<FormTextArea
					label='ADD A VIDEO DESCRIPTION'
					name='upload-description'
					placeholder='Add a description to your video'
				/>
				{/* <label className='upload-page__label' htmlFor='upload-title'>
					
				</label>
				<input
					className='upload-page__title-input'
					type='input'
					name='upload-title'
					id='upload-title'
					placeholder='Add a title to your video'
				></input> */}
				{/* <label className='upload-page__label' htmlFor='upload-description'>
					ADD A VIDEO DESCRIPTION
				</label>
				<textarea
					className='upload-page__description-input'
					name='upload-description'
					id='upload-description'
					placeholder='Add a description to your video'
				></textarea> */}
				<div className='upload-page__button-container'>
					<Button type='publish' />
					<Button type='cancel' />
				</div>
			</form>
		</>
	);
}

export default UploadPage;
