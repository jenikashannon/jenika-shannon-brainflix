import "./App.scss";
import videoDetails from "./data/video-details.json";
import Navbar from "./components/Navbar/Navbar";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import NextVideos from "./components/NextVideos/NextVideos";
import { useState } from "react";

function App() {
	const [mainVideo, setMainVideo] = useState(
		"84e96018-4022-434e-80bf-000ce4cd12b8"
	);

	return (
		<div className='App'>
			<Navbar />
			<VideoPlayer
				video={videoDetails.find((video) => video.id === mainVideo)}
			/>
			<div className='app-container'>
				<VideoDetails
					video={videoDetails.find((video) => video.id === mainVideo)}
				/>
				<NextVideos mainVideo={mainVideo} />
			</div>
		</div>
	);
}

export default App;
