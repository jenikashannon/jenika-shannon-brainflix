import FormInput from "../../components/FormInput/FormInput";
import FormTextArea from "../../components/FormTextArea/FormTextArea";
import FormFile from "../../components/FormFile/FormFile";
import Divider from "../../components/Divider/Divider";
import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl, publicPath } from "../../consts";

import "./UploadPage.scss";

function UploadPage() {
	const thumbnailDefault =
		"http://localhost:1700/images/upload-video-preview.jpg";

	const [isLoading, setIsLoading] = useState(false);
	const [isPublished, setIsPublished] = useState(false);
	const [thumbnail, setThumbnail] = useState(thumbnailDefault);
	const [thumbnailFile, setThumbnailFile] = useState(null);
	const [thumbnailId, setThumbnailId] = useState("");
	const [newVideo, setNewVideo] = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		if (thumbnailId) {
			const imagePath = `${publicPath}/${thumbnailId}`;
			setThumbnail(imagePath);
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
		} catch (error) {}
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
		} catch (error) {}
	}

	async function deleteImage() {
		try {
			await axios.patch(`${baseUrl}/videos/thumbnail`, { file: thumbnail });
		} catch (error) {}
	}

	function handleSubmit(event) {
		event.preventDefault();
		setIsLoading(true);

		while (!thumbnailFile) {}

		saveImage(thumbnailFile);

		const title = event.target.uploadTitle.value;
		const description = event.target.uploadDescription.value;

		const videoTemplate = {
			title: title || "(No Title)",
			description: description || "(No Description)",
			image: thumbnail,
			channel: "A very cool channel",
			views: "0",
			likes: "0",
			duration: "2:17",
			video: "import from public",
			timestamp: new Date().getTime(),
			comments: [],
		};

		// comment out to force loading state
		setNewVideo(videoTemplate);

		// uncomment to force loading state
		// setTimeout(() => {
		// 	setNewVideo(videoTemplate);
		// }, 5000);

		// clear input fields
		event.target.uploadTitle.value = "";
		event.target.uploadDescription.value = "";
		event.target.uploadImage.value = "";
	}

	function handleCancel(event) {
		navigate("/");
	}

	if (isLoading) {
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
						<img
							className='upload-page__thumbnail'
							src={thumbnail || thumbnailDefault}
						/>
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
						<FormFile
							thumbnail={thumbnail}
							setThumbnail={setThumbnail}
							setThumbnailFile={setThumbnailFile}
							saveImage={saveImage}
							deleteImage={deleteImage}
							thumbnailDefault={thumbnailDefault}
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
