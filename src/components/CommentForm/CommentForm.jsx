import "./CommentForm.scss";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import FormTextArea from "../FormTextArea/FormTextArea";
import { publicPath } from "../../consts";

function CommentForm({ count, addComment }) {
	const userAvatar = `${publicPath}/Mohan-muruge.jpg`;

	function handleSubmit(event) {
		event.preventDefault();

		const comment = {
			name: "Unknown User",
			comment: event.target.comment.value,
		};

		event.target.comment.value = "";

		addComment(comment);
	}

	return (
		<article className='comments'>
			<p className='comments__count'>
				{count === 1 ? `1 Comment` : `${count} Comments`}
			</p>
			<div className='comments__container'>
				<Avatar imageUrl={userAvatar} type='comment' />
				<form className='comment-form' onSubmit={handleSubmit}>
					<FormTextArea
						label='JOIN THE CONVERSATION'
						name='comment'
						placeholder='Add a new comment'
						type='comment'
					/>
					<Button type='comment' />
				</form>
			</div>
		</article>
	);
}

export default CommentForm;
