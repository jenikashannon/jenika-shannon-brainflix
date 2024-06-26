import "./Navbar.scss";
import logo from "../../assets/logos/BrainFlix-logo.svg";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Divider from "../Divider/Divider";
import { Link } from "react-router-dom";
import { publicPath } from "../../consts";

const NavBar = () => {
	const userAvatar = `${publicPath}/Mohan-muruge.jpg`;

	return (
		<>
			<header className='navbar'>
				<Link to='/'>
					<img className='navbar__logo' src={logo} alt='BrainFlix logo'></img>
				</Link>
				<div className='navbar__container'>
					<div className='navbar__search'>
						<input
							className='navbar__search-field'
							type='search'
							id='videoSearch'
							name='videoSearch'
							placeholder='Search'
						></input>
						<Avatar imageUrl={userAvatar} type='mobile' />
					</div>
					<Link to='/upload'>
						<Button type='upload'></Button>
					</Link>
					<Avatar imageUrl={userAvatar} type='tablet' />
				</div>
			</header>
			<Divider />
		</>
	);
};

export default NavBar;
