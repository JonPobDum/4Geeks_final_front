import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home (props) { 
	return (  
	 <div className="home">
			<Navbar/>
		<button>Empecemos</button>
		<h1>Brain Manager</h1>
		<p>Aenean molestie accumsan lorem eget luctus. Praesent quis elit vel erat dignissim malesuada vel eu felis. Duis a rhoncus velit, vel vehicula tellus. Integer risus nibh, varius in blandit a, aliquam at justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
		<userExperience/>
	<Footer/>
	</div>

	)
	};
export default Home;