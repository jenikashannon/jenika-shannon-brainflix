import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import Divider from "../../components/Divider/Divider";
import FormInput from "../../components/FormInput/FormInput";
import FormTextArea from "../../components/FormTextArea/FormTextArea";
import FormFile from "../../components/FormFile/FormFile";
import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiKey, baseUrl, publicPath } from "../../consts";

import "./UploadPage.scss";

let videoTemplate;
let file;

function UploadPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [isPublished, setIsPublished] = useState(false);
	const [thumbnailId, setThumbnailId] = useState("");
	const [newVideo, setNewVideo] = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		if (thumbnailId) {
			const videoWithImage = {
				...videoTemplate,
				image: `${publicPath}/${thumbnailId}`,
			};

			setNewVideo(videoWithImage);
		}
	}, [thumbnailId]);

	useEffect(() => {
		if (newVideo) {
			postVideo(newVideo);

			// trigger success alert
			setIsLoading(false);
			setIsPublished(true);

			// navigate to home page
			setTimeout(() => {
				navigate("/");
			}, 1000);
		}
	}, [newVideo]);

	async function postVideo(video) {
		try {
			await axios.post(`${baseUrl}/videos`, video);
		} catch (error) {
			console.log(error);
		}
	}

	async function saveImage(file) {
		const formData = new FormData();

		formData.append("files", file);

		try {
			const response = await axios.post(
				`${baseUrl}/videos/thumbnail`,
				formData,
				{ headers: { "Content-Type": "multipart/form-data" } }
			);
			setThumbnailId(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		setIsLoading(true);

		const title = event.target.uploadTitle.value;
		const description = event.target.uploadDescription.value;

		file = event.target.uploadImage.files[0];

		videoTemplate = {
			title: title || "(No Title)",
			description: description || "(No Description)",
			image: "http://localhost:1700/images/upload-video-preview.jpg",
			channel: "A very cool channel",
			views: "0",
			likes: "0",
			duration: "2:17",
			video: "import from public",
			timestamp: new Date().getTime(),
			comments: [],
		};

		if (file) {
			saveImage(file);
		} else {
			// comment out to force loading state
			setNewVideo(videoTemplate);

			// uncomment to force loading state
			// setTimeout(() => {
			// 	setNewVideo(videoTemplate);
			// }, 5000);
		}

		// clear input fields
		event.target.uploadTitle.value = "";
		event.target.uploadDescription.value = "";
		event.target.uploadImage.value = "";
	}

	function handleCancel(event) {
		navigate("/");
	}

	if (isLoading) {
		console.log("in here");
		return <Loading type='upload' />;
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
							value='My Video'
						/>
						<FormTextArea
							label='ADD A VIDEO DESCRIPTION'
							name='uploadDescription'
							placeholder='Add a description to your video'
							value='My description'
						/>
						<FormFile />
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
