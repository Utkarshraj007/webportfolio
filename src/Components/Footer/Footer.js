import "./Footer.css";

const Footer = () => {
	return (
		<footer>
			<a
				href="https://www.linkedin.com/in/utkarsh-raj-a62121200"
				target="_blank"
				rel="noreferrer"
			>
				<i className="icons fab fa-linkedin fa-2x"></i>
			</a>
			<a href="https://github.com/Utkarshraj007" target="_blank" rel="noreferrer">
				<i className="icons fab fa-github fa-2x"></i>
			</a>
			<a href="https://19bcs1429@gmail.com" target="_blank" rel="noreferrer">
				<i className="icons fas fa-envelope fa-2x"></i>
			</a>
			<a href="tel:+8789092103" target="_blank" rel="noreferrer">
				<i className="icons fas fa-phone-square-alt fa-2x"></i>
			</a>
		</footer>
	);
};

export default Footer;
