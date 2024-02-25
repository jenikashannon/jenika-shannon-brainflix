import "./Navbar.scss";
import logo from "../../assets/logos/BrainFlix-logo.svg";
import Avatar from "../Avatar/Avatar";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import Button from "../Button/Button";

const NavBar = () => {
	return (
		<header className='navbar'>
			<img className='navbar__logo' src={logo} alt='BrainFlix logo'></img>
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
				<Button type='upload'></Button>
				<Avatar imageUrl={userAvatar} type='tablet' />
			</div>
		</header>
	);
};

export default NavBar;
