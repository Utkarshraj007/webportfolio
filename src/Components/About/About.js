import React from "react";
import "./About.css";

const About = () => {
	return (
		<div className="skills about">
			<div className="content">
				<div className="section">
					<h2 className="section-header">Summary</h2>
					<p>
						I am an undergraduate student with an innate love for
						problem-solving with algorithms and a passion for frontend
						development. I'm a B.Tech Pre-Final year Computer Science student
						from Chandigarh University, Gharuan with strong core computer science knowledge of
						Operating Systems, Database Management System, SQL and Data
						Structures and Algorithms.
					</p>
				</div>
			</div>
			<div className="section">
				<h2 className="section-header">Skills</h2>
				<img
					src="https://img.icons8.com/color/95/000000/c-plus-plus-logo.png"
					alt="logo"
				/>
				<img
					src="https://img.icons8.com/color/96/000000/html-5--v1.png"
					alt="logo"
				/>
				<img src="https://img.icons8.com/color/96/000000/css3.png" alt="logo" />
				<img
					src="https://img.icons8.com/color/96/000000/javascript.png"
					alt="logo"
				/>
				<img
					src="https://img.icons8.com/color/96/000000/react-native.png"
					alt="logo"
				/>
				<img
					src="https://img.icons8.com/color/96/000000/redux.png"
					alt="logo"
				/>
				<img
					src="https://img.icons8.com/nolan/96/api-settings.png"
					alt="logo"
				/>
				<img
					src="https://img.icons8.com/plasticine/100/000000/oracle-pl-sql--v3.png"
					alt="logo"
				/>
				<img src="https://img.icons8.com/color/96/000000/git.png" alt="logo" />
			</div>
			<div className="section">
				<h2 className="section-header">Achievements</h2>
				<ul>
					<li>
						200+ points on GeeksForGeeks.{" "}
						<a
							href="https://auth.geeksforgeeks.org/user/utkarshraj007/profile"
							style={{ color: "blue" }}
							target="_blank"
							rel="noreferrer"
						>
							Link to profile
						</a>
					</li>
					<li>
						Solved over 200+ questions on Data Structures and Algorithms on
						Leetcode.{" "}
						<a
							href="https://leetcode.com/19BCS1429/"
							style={{ color: "blue" }}
							target="_blank"
							rel="noreferrer"
						>
							Link to profile
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
