import "./NextVideos.scss";
import Divider from "../Divider/Divider";
import VideoList from "../VideoList/VideoList";

function NextVideos({ mainVideoId, updateMainVideo }) {
	return (
		<section className='next-videos'>
			<Divider type='vertical' />
			<div className='next-videos__container'>
				<h2 className='next-videos__title'>NEXT VIDEOS</h2>
				<VideoList
					mainVideoId={mainVideoId}
					updateMainVideo={updateMainVideo}
				/>
			</div>
		</section>
	);
}

export default NextVideos;
