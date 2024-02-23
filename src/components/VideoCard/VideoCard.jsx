import "./VideoCard.scss";

function VideoCard({ image, title, channel }) {
	return (
		<article className='video-card'>
			<div className='video-card__image-container'>
				<img className='video-card__image' src={image} alt={`${title}`} />
			</div>
			<div className='video-card__text-container'>
				<h3 className='video-card__title'>{title}</h3>
				<p className='video-card__channel'>{channel}</p>
			</div>
		</article>
	);
}

export default VideoCard;
