import "./Avatar.scss";

const Avatar = ({ imageUrl, type }) => {
	return (
		<div className={`avatar ${type ? `avatar--${type}` : ""}`}>
			<img src={imageUrl} alt='' />
		</div>
	);
};

export default Avatar;
