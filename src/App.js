import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<VideoPlayer />
		</div>
	);
}

export default App;
