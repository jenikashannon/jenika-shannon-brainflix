import "./Button.scss";
import uploadIcon from "../../assets/icons/upload.svg";
import commentIcon from "../../assets/icons/add_comment.svg";

const Button = ({ type, handleCancel }) => {
	let buttonText;
	let buttonIcon;
	let className;
	let onClick;

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
		onClick = handleCancel;
	}

	if (type === "cancel--tablet") {
		buttonText = "CANCEL";
		className = "button button--secondary button--tablet";
		onClick = handleCancel;
	}

	return (
		<button
			className={className}
			type={type === "publish" ? "submit" : ""}
			onClick={handleCancel}
		>
			<img className='button__icon' src={buttonIcon} alt='' />
			{buttonText}
		</button>
	);
};

export default Button;
