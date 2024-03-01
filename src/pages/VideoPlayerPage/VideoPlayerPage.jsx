import "./VideoPlayerPage.scss";
import VideoMedia from "../../components/VideoMedia/VideoMedia";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import NextVideos from "../../components/NextVideos/NextVideos";
import { apiKey, baseUrl } from "../../consts";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function VideoPlayerPage() {
	const [mainVideo, setMainVideo] = useState(null);
	const [errorState, setErrorState] = useState(false);
	let { videoId } = useParams();
	const navigate = useNavigate();

	// if no video id, load first video
	videoId = videoId ? videoId : "84e96018-4022-434e-80bf-000ce4cd12b8";

	useEffect(() => {
		//scroll to top of page
		window.scrollTo(0, 0);

		async function getMainVideo() {
			try {
				const result = await axios.get(
					`${baseUrl}/videos/${videoId}?api_key=${apiKey}`
				);
				setMainVideo(result.data);
			} catch (error) {
				setErrorState(true);
			}
		}

		getMainVideo();
	}, [videoId]);

	if (errorState) {
		setTimeout(() => {
			setErrorState(false);
			navigate("/");
		}, 1500);

		return <div>Oops, that video doesn't exit. Taking you home.</div>;
	}

	return mainVideo ? (
		<>
			<VideoMedia video={mainVideo} />
			<div className='video-player-page-container'>
				<VideoDetails video={mainVideo} />
				<NextVideos mainVideoId={mainVideo.id} />
			</div>
		</>
	) : (
		<div>Loading...</div>
	);
}

export default VideoPlayerPage;
