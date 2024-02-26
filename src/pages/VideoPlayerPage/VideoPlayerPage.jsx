import "./VideoPlayerPage.scss";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import NextVideos from "../../components/NextVideos/NextVideos";
import videoDetails from "../../data/video-details.json";
import { useParams } from "react-router-dom";

function VideoPlayerPage() {
	const { videoId } = useParams();
	let mainVideo = {};

	if (videoId) {
		mainVideo = videoDetails.find((video) => video.id === videoId);
	} else {
		mainVideo = videoDetails[0];
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
