import "./NextVideos.scss";
import Divider from "../Divider/Divider";
import VideoList from "../VideoList/VideoList";

function NextVideos({ mainVideo }) {
	return (
		<section className='next-videos'>
			<Divider type='vertical' />
			<div className='next-videos__container'>
				<h2 className='next-videos__title'>NEXT VIDEOS</h2>
				<VideoList mainVideo={mainVideo} />
			</div>
		</section>
	);
}

export default NextVideos;
