import "./Divider.scss";

function Divider({ type }) {
	return (
		<div
			className={type === "mobile" ? "divider divider--mobile" : "divider"}
		></div>
	);
}

export default Divider;
