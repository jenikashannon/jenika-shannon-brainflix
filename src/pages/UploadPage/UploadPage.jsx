import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import Divider from "../../components/Divider/Divider";
import FormInput from "../../components/FormInput/FormInput";
import FormTextArea from "../../components/FormTextArea/FormTextArea";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiKey, baseUrl } from "../../consts";
import "./UploadPage.scss";

function UploadPage() {
	const [isPublished, setIsPublished] = useState(false);
	const navigate = useNavigate();

	async function postVideo(video) {
		try {
			await axios.post(`${baseUrl}/videos`, video);
		} catch (error) {
			console.log(error);
		}
	}

	function handleSubmit(event) {
		event.preventDefault();

		const newVideo = {
			title: event.target.uploadTitle.value,
			description: event.target.uploadDescription.value,
			image: "http://localhost:1700/images/upload-video-preview",
			channel: "A very cool channel",
			views: 0,
			likes: 0,
			duration: "2:17",
			video: "import from public",
			timestamp: new Date().getTime(),
			comments: [],
		};

		postVideo(newVideo);

		// // trigger success alert
		// setIsPublished(true);

		// // navigate to home page.
		// setTimeout(() => {
		// 	navigate("/");
		// }, 1000);

		// clear input fields
		event.target.uploadTitle.value = "";
		event.target.uploadDescription.value = "";
	}

	function handleCancel(event) {
		navigate("/");
	}

	return (
		<div className='upload-page'>
			<h1 className='upload-page__title'>Upload Video</h1>
			<Divider type='tablet' />
			<form onSubmit={handleSubmit}>
				<div className='upload-page__container'>
					<div className='upload-page__thumbnail-container'>
						<label className='upload-page__label'>VIDEO THUMBNAIL</label>
						<img className='upload-page__thumbnail' src={thumbnail} />
					</div>
					<div className='upload-page__input-container'>
						<FormInput
							label='TITLE YOUR VIDEO'
							name='uploadTitle'
							placeholder='Add a title to your video'
						/>
						<FormTextArea
							label='ADD A VIDEO DESCRIPTION'
							name='uploadDescription'
							placeholder='Add a description to your video'
						/>
					</div>
				</div>
				<Divider type='tablet' />
				<div className='upload-page__button-container'>
					<Button type='cancel--tablet' handleCancel={handleCancel} />
					<Button type='publish' />
					<Button type='cancel--mobile' handleCancel={handleCancel} />
				</div>
			</form>
			{isPublished ? ( // if upload successful, render alert
				<div className='upload-page__alert'>
					Upload successful! <br />
					Taking you home.
				</div>
			) : null}
		</div>
	);
}

export default UploadPage;
