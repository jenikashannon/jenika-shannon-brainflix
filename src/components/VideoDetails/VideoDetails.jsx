import "./VideoDetails.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import Divider from "../Divider/Divider";
import NameAndDate from "../NameAndDate/NameAndDate";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";

function VideoDetails({ video, addComment, deleteComment, addLike }) {
	const { id, title, channel, description, views, likes, timestamp, comments } =
		video;

	function handleClick() {
		addLike();
	}

	return (
		<section className='video-details'>
			<h1 className='video-details__title'>{title}</h1>
			<Divider type='mobile' />
			<div className='video-details__metadata-container'>
				<NameAndDate name={channel} date={timestamp} type='video' />
				<div className='video-details__stats-container'>
					<div className='video-details__views'>
						<img className='video-details__views-icon' src={viewsIcon} />
						<p className='video-details__views-count'>{views}</p>
					</div>
					<div className='video-details__likes'>
						<button className='video-details__likes-button' onClick={addLike}>
							<img className='video-details__likes-icon' src={likesIcon} />
						</button>
						<p className='video-details__likes-count'>{likes}</p>
					</div>
				</div>
			</div>
			<Divider />
			<p className='video-details__description'>{description}</p>
			<CommentForm
				count={comments.length}
				commentList={comments}
				addComment={addComment}
			/>
			<Divider />
			<CommentList commentList={comments} deleteComment={deleteComment} />
		</section>
	);
}

export default VideoDetails;
