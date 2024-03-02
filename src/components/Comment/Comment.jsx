import "./Comment.scss";
import Avatar from "../Avatar/Avatar";
import NameAndDate from "../NameAndDate/NameAndDate";
import Divider from "../Divider/Divider";

function Comment({ commentObj, deleteComment }) {
	const { comment, name, timestamp, id } = commentObj;
	return (
		<div className='comment'>
			<Avatar />
			<div className='comment__text-container'>
				<NameAndDate name={name} date={timestamp} />
				<p className='comment__content'>{comment}</p>
				<div
					className='comment__button--delete'
					onClick={() => deleteComment(id)}
				>
					X
				</div>
			</div>
		</div>
	);
}

export default Comment;
