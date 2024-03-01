import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import Divider from "../../components/Divider/Divider";
import FormInput from "../../components/FormInput/FormInput";
import FormTextArea from "../../components/FormTextArea/FormTextArea";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadPage.scss";

function UploadPage() {
	const [isPublished, setIsPublished] = useState(false);
	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();

		// trigger success alert
		setIsPublished(true);

		// navigate to home page.
		setTimeout(() => {
			navigate("/");
		}, 1000);
	}

	return (
		<div className='upload-page'>
			{isPublished ? ( // if upload successful, render alert
				<div className='upload-page__alert'>
					Upload successful! Taking you home.
				</div>
			) : null}
			<h1 className='upload-page__title'>Upload Video</h1>
			<Divider type='tablet' />
			<form onSubmit={handleSubmit}>
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
