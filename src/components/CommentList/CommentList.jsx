import "./CommentList.scss";
import Comment from "../Comment/Comment";

function CommentList({ comments }) {
	comments.sort((a, b) => {
		return b.timestamp - a.timestamp;
	});

	return comments.map((comment) => {
		return <Comment commentObj={comment} />;
	});
}

export default CommentList;
