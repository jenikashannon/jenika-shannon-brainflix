import "./VideoList.scss";
import VideoCard from "../VideoCard/VideoCard";
import videoList from "../../data/videos.json";

function VideoList({ mainVideo }) {
	return videoList
		.filter((video) => video.id !== mainVideo)
		.map((video) => {
			return (
				<VideoCard
					title={video.title}
					image={video.image}
					channel={video.channel}
				/>
			);
		});
}

export default VideoList;
