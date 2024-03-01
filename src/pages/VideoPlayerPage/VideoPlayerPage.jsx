import "./VideoPlayerPage.scss";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import NextVideos from "../../components/NextVideos/NextVideos";
import { apiKey, baseUrl } from "../../consts";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function VideoPlayerPage() {
	const [mainVideo, setMainVideo] = useState(null);
	let { videoId } = useParams();
	videoId = videoId ? videoId : "84e96018-4022-434e-80bf-000ce4cd12b8";

	useEffect(() => {
		window.scrollTo(0, 0);

		async function getMainVideo() {
			try {
				const result = await axios.get(
					`${baseUrl}/videos/${videoId}?api_key=${apiKey}`
				);
				setMainVideo(result.data);
			} catch (error) {
				console.log(error);
			}
		}

		getMainVideo();
	}, [videoId]);

	if (!mainVideo) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<VideoPlayer video={mainVideo} />
			<div className='video-player-page-container'>
				<VideoDetails video={mainVideo} />
				<NextVideos mainVideoId={mainVideo.id} />
			</div>
		</>
	);
}

export default VideoPlayerPage;
