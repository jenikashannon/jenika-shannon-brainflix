import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import Divider from "../../components/Divider/Divider";
import FormInput from "../../components/FormInput/FormInput";
import FormTextArea from "../../components/FormTextArea/FormTextArea";
import Button from "../../components/Button/Button";

import "./UploadPage.scss";

function UploadPage() {
	return (
		<div className='upload-page'>
			<h1 className='upload-page__title'>Upload Video</h1>
			<Divider type='tablet' />
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
				<Divider type='tablet' />
				<div className='upload-page__button-container'>
					<Button type='cancel--tablet' />
					<Button type='publish' />
					<Button type='cancel--mobile' />
				</div>
			</form>
		</div>
	);
}

export default UploadPage;
