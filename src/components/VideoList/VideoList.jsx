import "./VideoList.scss";
import VideoCard from "../VideoCard/VideoCard";
import { baseUrl } from "../../consts";
import axios from "axios";

function VideoList({ mainVideoId, videoList }) {
	return videoList
		.filter((video) => video.id !== mainVideoId)
		.map((video) => {
			return (
				<VideoCard
					title={video.title}
					image={video.image}
					channel={video.channel}
					id={video.id}
					key={video.id}
				/>
			);
		});
}

export default VideoList;
