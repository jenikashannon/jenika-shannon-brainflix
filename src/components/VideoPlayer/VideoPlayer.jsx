import "./VideoPlayer.scss";

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
