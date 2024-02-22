import "./CommentForm.scss";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";

function CommentForm() {
	return (
		<article className='comments'>
			<p className='comment__count'></p>
			<div className='comment-form'>
				<Avatar />
				<form>
					<label className='comment-form__label' htmlFor='comment'>
						JOIN THE CONVERSATION
					</label>
					<input
						className='comment-form__field'
						type='input'
						id='comment'
						name='comment'
					></input>
					<Button type='comment' />
				</form>
			</div>
		</article>
	);
}

export default CommentForm;
