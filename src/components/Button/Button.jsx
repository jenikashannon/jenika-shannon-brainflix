import "./Button.scss";
import uploadIcon from "../../assets/icons/upload.svg";
import commentIcon from "../../assets/icons/add_comment.svg";

const Button = ({ type }) => {
	let buttonText;
	let buttonIcon;

	if (type === "upload") {
		buttonText = "UPLOAD";
		buttonIcon = uploadIcon;
	}

	if (type === "publish") {
		buttonText = "PUBLISH";
		buttonIcon = uploadIcon;
	}

	if (type === "comment") {
		buttonText = "COMMENT";
		buttonIcon = commentIcon;
	}

	if (type === "cancel") {
		buttonText = "CANCEL";
	}

	return (
		<button
			className={type === "cancel" ? "button button--secondary" : "button"}
		>
			<img className='button__icon' src={buttonIcon} alt='' />
			{buttonText}
			<></>
		</button>
	);
};

export default Button;
