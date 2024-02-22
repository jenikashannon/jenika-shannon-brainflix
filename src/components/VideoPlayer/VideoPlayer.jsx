import "./VideoPlayer.scss";
import videoPreview from "../../assets/images/Upload-video-preview.jpg";

function VideoPlayer() {
	return (
		<video className='video-player' controls poster={videoPreview}>
			<source src='' />
		</video>
	);
}

export default VideoPlayer;
