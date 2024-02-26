import "./Navbar.scss";
import logo from "../../assets/logos/BrainFlix-logo.svg";
import Avatar from "../Avatar/Avatar";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import Button from "../Button/Button";
import Divider from "../Divider/Divider";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<header className='navbar'>
				<Link to='/'>
					<img className='navbar__logo' src={logo} alt='BrainFlix logo'></img>
				</Link>
				<div className='navbar__container'>
					<search className='navbar-search'>
						<input
							className='navbar-search__field'
							type='search'
							id='videoSearch'
							name='videoSearch'
							placeholder='Search'
						></input>
						<Avatar imageUrl={userAvatar} type='mobile' />
					</search>
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
