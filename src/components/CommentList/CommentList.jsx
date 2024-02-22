import "./CommentList.scss";
import Comment from "../Comment/Comment";

function CommentList({ commentList }) {
	commentList.sort((a, b) => {
		return b.timestamp - a.timestamp;
	});

	return commentList.map((comment) => {
		return <Comment commentObj={comment} />;
	});
}

export default CommentList;
