import "./Button.scss";
import uploadIcon from "../../assets/icons/upload.svg";
import commentIcon from "../../assets/icons/add_comment.svg";

const Button = ({ type }) => {
	let buttonText;
	let buttonIcon;
	let className;

	if (type === "upload") {
		buttonText = "UPLOAD";
		buttonIcon = uploadIcon;
		className = "button";
	}

	if (type === "publish") {
		buttonText = "PUBLISH";
		buttonIcon = uploadIcon;
		className = "button";
	}

	if (type === "comment") {
		buttonText = "COMMENT";
		buttonIcon = commentIcon;
		className = "button";
	}

	if (type === "cancel--mobile") {
		buttonText = "CANCEL";
		className = "button button--secondary button--mobile";
	}

	if (type === "cancel--tablet") {
		buttonText = "CANCEL";
		className = "button button--secondary button--tablet";
	}

	return (
		<button className={className}>
			<img className='button__icon' src={buttonIcon} alt='' />
			{buttonText}
			<></>
		</button>
	);
};

export default Button;
