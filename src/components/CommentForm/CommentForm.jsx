import "./CommentForm.scss";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";

function CommentForm({ count, commentList, setCommentList }) {
	return (
		<article className='comments'>
			<p className='comments__count'>
				{count === 1 ? `1 Comment` : `${count} Comments`}
			</p>
			<div className='comments__container'>
				<Avatar />
				<form className='comment-form'>
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
					<Button type='comment' />
				</form>
			</div>
		</article>
	);
}

export default CommentForm;
