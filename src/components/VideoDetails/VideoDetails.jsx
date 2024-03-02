import "./VideoDetails.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import Divider from "../Divider/Divider";
import NameAndDate from "../NameAndDate/NameAndDate";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";

function VideoDetails({ video, addComment, deleteComment }) {
	const { title, channel, description, views, likes, timestamp, comments } =
		video;

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
						<img className='video-details__likes-icon' src={likesIcon} />
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
