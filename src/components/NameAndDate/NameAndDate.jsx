import "./NameAndDate.scss";
import { formatTimestamp } from "../../util/formatTimestamp";

function NameAndDate({ name, date, type }) {
	return (
		<div
			className={
				type === "video"
					? "name-and-date name-and-date--video"
					: "name-and-date"
			}
		>
			<p
				className={
					type === "video"
						? "name-and-date__name name-and-date__name--video"
						: "name-and-date__name"
				}
			>
				{type === "video" ? `By ${name}` : name}
			</p>
			<p className='name-and-date__date'>{formatTimestamp(date)}</p>
		</div>
	);
}

export default NameAndDate;
