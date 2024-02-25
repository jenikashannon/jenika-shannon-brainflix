import "./App.scss";
import videoDetails from "./data/video-details.json";
import Navbar from "./components/Navbar/Navbar";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import NextVideos from "./components/NextVideos/NextVideos";
import { useState } from "react";

function App() {
	const [mainVideo, setMainVideo] = useState(videoDetails[0]);

	function updateMainVideo(videoId) {
		setMainVideo(videoDetails.find((video) => video.id === videoId));
	}

	return (
		<div className='App'>
			<Navbar />
			<VideoPlayer
				video={videoDetails.find((video) => video.id === mainVideo.id)}
			/>
			<div className='app-container'>
				<VideoDetails video={mainVideo} />
				<NextVideos
					mainVideoId={mainVideo.id}
					updateMainVideo={updateMainVideo}
				/>
			</div>
		</div>
	);
}

export default App;
