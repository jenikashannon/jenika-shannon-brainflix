import "./VideoMedia.scss";

function VideoMedia({ video }) {
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

export default VideoMedia;
