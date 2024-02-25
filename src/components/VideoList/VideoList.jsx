import "./VideoList.scss";
import VideoCard from "../VideoCard/VideoCard";
import videoList from "../../data/videos.json";

function VideoList({ mainVideoId, updateMainVideo }) {
	return videoList
		.filter((video) => video.id !== mainVideoId)
		.map((video) => {
			return (
				<VideoCard
					title={video.title}
					image={video.image}
					channel={video.channel}
					id={video.id}
					updateMainVideo={updateMainVideo}
				/>
			);
		});
}

export default VideoList;
