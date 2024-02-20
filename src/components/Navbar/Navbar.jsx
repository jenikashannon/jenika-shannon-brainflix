import "./Navbar.scss";
import logo from "../../assets/logos/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import Button from "../Button/Button";

const NavBar = () => {
	return (
		<header className='navbar'>
			<img className='navbar__logo' src={logo} alt='BrainFlix logo'></img>
			<search className='navbar-search'>
				<input
					className='navbar-search__field'
					type='search'
					id='videoSearch'
					name='videoSearch'
					placeholder='Search'
				></input>
				<img className='navbar__avatar' src={avatar} alt='avatar' />
			</search>
			<Button type='upload'></Button>
		</header>
	);
};

export default NavBar;
