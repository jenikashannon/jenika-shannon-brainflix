import "./App.scss";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";
import Navbar from "./components/Navbar/Navbar";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import { useState } from "react";

function App() {
	const [videoList] = useState(videos);
	const [mainVideo, setMainVideo] = useState(
		"84e96018-4022-434e-80bf-000ce4cd12b8"
	);

	return (
		<div className='App'>
			<Navbar />
			<VideoPlayer
				video={videoDetails.find((video) => video.id === mainVideo)}
			/>
			<VideoDetails
				video={videoDetails.find((video) => video.id === mainVideo)}
			/>
		</div>
	);
}

export default App;
