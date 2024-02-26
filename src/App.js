import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import VideoPlayerPage from "./pages/VideoPlayerPage/VideoPlayerPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<VideoPlayerPage />} />
				<Route path='/upload' element={<UploadPage />} />
				<Route path='/video/:videoId' element={<VideoPlayerPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
