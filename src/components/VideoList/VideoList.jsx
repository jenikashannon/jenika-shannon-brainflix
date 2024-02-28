import "./VideoList.scss";
import VideoCard from "../VideoCard/VideoCard";
import { apiKey, baseUrl } from "../../consts";
import axios from "axios";
import { useState, useEffect } from "react";

function VideoList({ mainVideoId }) {
	const [videoList, setVideoList] = useState([]);

	useEffect(() => {
		async function getVideos() {
			try {
				const result = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`);
				setVideoList(result.data);
			} catch (error) {
				console.log(error);
			}
		}

		getVideos();
	}, []);

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
