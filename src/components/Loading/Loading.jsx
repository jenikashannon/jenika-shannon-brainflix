import "./Loading.scss";
import logo from "../../assets/logos/BrainFlix-logo.svg";

function Loading({ type }) {
	let loadingText;

	switch (type) {
		case "upload":
			loadingText = "Adding your video to our neural network...";
			break;

		default:
			break;
	}

	return (
		<div className='loading'>
			{loadingText ? <h2 className='loading__text'>{loadingText}</h2> : null}
			<img src={logo} className='loading__logo' />
		</div>
	);
}

export default Loading;
