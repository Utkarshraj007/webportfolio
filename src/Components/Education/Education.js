import React from "react";
import "./Education.css";

const About = () => {
	return (
		<div className="education-container">
			<div className="education-section">
				<h1>Undergraduate | 2019-present </h1>
				<h3>Chandigarh University,Gharuan | 7.94 CGPA</h3>
				<h5>B.Tech | Computer Science Engineering</h5>
				<ul>
					<li>
						Participated in various coding competition in college
					</li>
				</ul>
			</div>
			<div className="education-section">
				<h1>Intermediate | 2016-2018 </h1>
				<h3>Jawahar Vidya Mandir, Shyamali | 85.2 %</h3>
				<h5>12th | CBSE | Physics, Chemistry, Maths</h5>
				<ul>
					<li>member of English Literature Society.</li>
					<li>
						wrote various articles and brochures for the school's annual
						yearbook.
					</li>
				</ul>
			</div>
			<div className="education-section">
				<h1>Matriculation | 2004-2016 </h1>
				<h3>ST. Teresa's School, Bhagalpur | 94.40 %</h3>
				<h5>10th | ICSE | Science with Computer Applications</h5>
				<ul>
					<li>
						secured 57th national rank in English Olympiad conducted by EduHeal
						Foundation.
					</li>
					<li>
						volunteered to organize the Silver Jubilee Fest (25th anniversary)
						of the school.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
