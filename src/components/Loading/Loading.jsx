import "./Loading.scss";
import logo from "../../assets/logos/BrainFlix-logo.svg";

function Loading() {
	return (
		<div className='loading'>
			<img src={logo} className='loading__logo' />
		</div>
	);
}

export default Loading;
