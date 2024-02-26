import "./VideoCard.scss";
import { Link } from "react-router-dom";

function VideoCard({ image, title, channel, id }) {
	return (
		<article className='video-card'>
			<div className='video-card__image-container'>
				<Link to={`/video/${id}`}>
					<img className='video-card__image' src={image} alt={`${title}`} />
				</Link>
			</div>
			<div className='video-card__text-container'>
				<h3 className='video-card__title'>{title}</h3>
				<p className='video-card__channel'>{channel}</p>
			</div>
		</article>
	);
}

export default VideoCard;
