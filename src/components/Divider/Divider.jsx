import "./Divider.scss";

function Divider({ type }) {
	let className = "";

	switch (type) {
		case "mobile":
			className = "divider divider--mobile";
			break;
		case "vertical":
			className = "divider divider--vertical";
			break;
		default:
			className = "divider";
	}

	return <div className={className}></div>;
}

export default Divider;
