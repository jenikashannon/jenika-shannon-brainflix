import "./CommentList.scss";
import Comment from "../Comment/Comment";
import Divider from "../Divider/Divider";

function CommentList({ commentList, deleteComment }) {
	commentList.sort((a, b) => {
		return b.timestamp - a.timestamp;
	});

	return commentList.map((comment) => {
		return (
			<div key={comment.id}>
				<Comment commentObj={comment} deleteComment={deleteComment} />
				<Divider />
			</div>
		);
	});
}

export default CommentList;
