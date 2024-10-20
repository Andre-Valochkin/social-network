import './Sitebar.css'

const Sitebar = () => {
	return (
		<div className="sitebar">
			<div className="sitebsr__wrapper">
				<ul className="sitebar__list">
					<li className="sitebar__elementList">
						<a href="#" className="sitebar__lincList">Profile</a>
					</li>
					<li className="sitebar__elementList">
						<a href="#" className="sitebar__lincList">Messages</a>
					</li>
					<li className="sitebar__elementList">
						<a href="#" className="sitebar__lincList">News</a>
					</li>
					<li className="sitebar__elementList">
						<a href="#" className="sitebar__lincList">Music</a>
					</li>
				</ul>
				<div className="sitebar__setingsBlock">
					<a className="sitebar__setingsLinc">Settings</a>
				</div>
			</div>
		</div>
	);
}
export default Sitebar;