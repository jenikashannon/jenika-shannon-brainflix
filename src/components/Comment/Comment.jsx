import "./Comment.scss";
import Avatar from "../Avatar/Avatar";
import NameAndDate from "../NameAndDate/NameAndDate";
import Divider from "../Divider/Divider";

function Comment({ commentObj }) {
	const { comment, name, timestamp } = commentObj;
	console.log(timestamp);
	return (
		<div className='comment'>
			<Avatar />
			<div className='comment__text-container'>
				<NameAndDate name={name} date={timestamp} />
				<p className='comment__content'>{comment}</p>
			</div>
			<Divider />
		</div>
	);
}

export default Comment;
