import "./VideoPlayerPage.scss";
import VideoMedia from "../../components/VideoMedia/VideoMedia";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import NextVideos from "../../components/NextVideos/NextVideos";
import Loading from "../../components/Loading/Loading";
import { baseUrl } from "../../consts";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function VideoPlayerPage() {
	const [videoList, setVideoList] = useState(null);
	const [mainVideo, setMainVideo] = useState(null);
	const [errorState, setErrorState] = useState(false);
	const [detailsChanged, setDetailsChanged] = useState(false);

	let { videoId } = useParams();
	const navigate = useNavigate();

	async function getVideos() {
		try {
			const result = await axios.get(`${baseUrl}/videos`);
			setVideoList(result.data);
		} catch (error) {}
	}

	async function getMainVideo() {
		try {
			const result = await axios.get(`${baseUrl}/videos/${videoId}`);
			setMainVideo(result.data);
		} catch (error) {
			setErrorState(true);
		}
	}

	async function addComment(comment) {
		setDetailsChanged(true);

		try {
			await axios.post(`${baseUrl}/videos/${videoId}/comments`, comment);
		} catch (error) {}
	}

	async function deleteComment(commentId) {
		setDetailsChanged(true);

		try {
			await axios.delete(`${baseUrl}/videos/${videoId}/comments/${commentId}`);
		} catch (error) {}
	}

	async function addLike() {
		setDetailsChanged(true);

		try {
			await axios.put(`${baseUrl}/videos/${videoId}/likes`);
		} catch (error) {}
	}

	useEffect(() => {
		getVideos();
	}, []);

	useEffect(() => {
		getMainVideo();

		// comment out to force load state
		setDetailsChanged(false);

		// uncomment to force load state
		// setTimeout(() => {
		// 	setDetailsChanged(false);
		// }, 5000);
	}, [videoList, videoId, detailsChanged]);

	if (errorState) {
		setTimeout(() => {
			setErrorState(false);
			navigate("/");
		}, 1500);

		return <div>Oops, that video doesn't exit. Taking you home.</div>;
	}

	if (!videoList || !mainVideo || detailsChanged) {
		return <Loading />;
	}

	return (
		<>
			<VideoMedia video={mainVideo} />
			<div className='video-player-page-container'>
				<VideoDetails
					video={mainVideo}
					addComment={addComment}
					deleteComment={deleteComment}
					addLike={addLike}
				/>
				<NextVideos mainVideoId={mainVideo.id} videoList={videoList} />
			</div>
		</>
	);
}

export default VideoPlayerPage;
