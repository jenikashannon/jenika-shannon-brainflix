import "./Loading.scss";
import logo from "../../assets/logos/BrainFlix-logo.svg";

function Loading() {
	//change to brainflix logo in center of container, add animation that changes opacity so looks like flashing
	return (
		<div className='loading'>
			<img src={logo} className='loading__logo' />
		</div>
	);
}

export default Loading;
