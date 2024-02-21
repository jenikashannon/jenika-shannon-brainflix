import "./Avatar.scss";

const Avatar = ({ imageUrl }) => {
	return (
		<div className='avatar'>
			<img src={imageUrl} alt='' />
		</div>
	);
};

export default Avatar;
