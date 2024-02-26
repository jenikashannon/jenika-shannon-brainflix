import "./CommentForm.scss";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import FormTextArea from "../FormTextArea/FormTextArea";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";

function CommentForm({ count, commentList, setCommentList }) {
	return (
		<article className='comments'>
			<p className='comments__count'>
				{count === 1 ? `1 Comment` : `${count} Comments`}
			</p>
			<div className='comments__container'>
				<Avatar imageUrl={userAvatar} />
				<form className='comment-form'>
					<FormTextArea
						label='JOIN THE CONVERSATION'
						name='comment'
						placeholder='Add a new comment'
					/>
					<Button type='comment' />
				</form>
			</div>
		</article>
	);
}

export default CommentForm;
