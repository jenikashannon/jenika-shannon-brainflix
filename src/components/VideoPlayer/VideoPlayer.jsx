import "./VideoPlayer.scss";
import videoPreview from "../../assets/images/Upload-video-preview.jpg";

function VideoPlayer({ video }) {
	console.log(video.video);
	return (
		<div className='video-player-container'>
			<video
				className='video-player'
				controls
				poster={video.image}
				src={video.video}
			></video>
		</div>
	);
}

export default VideoPlayer;
