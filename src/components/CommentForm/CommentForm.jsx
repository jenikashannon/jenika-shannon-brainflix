import "./CommentForm.scss";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
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
					<div className='comment-form__input-container'>
						<label className='comment-form__label' htmlFor='comment'>
							JOIN THE CONVERSATION
						</label>
						<textarea
							className='comment-form__field'
							type='text-area'
							id='comment'
							name='comment'
							placeholder='Add a new comment'
						></textarea>
					</div>
					<Button type='comment' />
				</form>
			</div>
		</article>
	);
}

export default CommentForm;
