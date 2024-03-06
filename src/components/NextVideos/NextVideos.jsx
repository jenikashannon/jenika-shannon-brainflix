import "./NextVideos.scss";
import Divider from "../Divider/Divider";
import VideoList from "../VideoList/VideoList";

function NextVideos({ mainVideoId, videoList }) {
	return (
		<section className='next-videos'>
			<Divider type='vertical' />
			<div className='next-videos__container'>
				<h2 className='next-videos__title'>NEXT VIDEOS</h2>
				<VideoList mainVideoId={mainVideoId} videoList={videoList} />
			</div>
		</section>
	);
}

export default NextVideos;
