import "./VideoPlayer.scss";
import videoPreview from "../../assets/images/Upload-video-preview.jpg";

function VideoPlayer() {
	return (
		<div className='video-player-container'>
			<video className='video-player' controls poster={videoPreview}>
				<source src='' />
			</video>
		</div>
	);
}

export default VideoPlayer;
