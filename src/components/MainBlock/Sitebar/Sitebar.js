import './Sitebar.css';

import { Link } from 'react-router-dom';


const Sitebar = () => {
	return (
		<div className="sitebar">
			<div className="sitebsr__wrapper">
				<ul className="sitebar__list">
					<li className="sitebar__elementList">
						<Link to="/Profile" className="sitebar__lincList">Профиль</Link>
					</li>
					<li className="sitebar__elementList">
						<Link to="/Massenger" className="sitebar__lincList">Сообщение</Link>
					</li>
					<li className="sitebar__elementList">
						<Link to="/News" className="sitebar__lincList">News</Link>
					</li>
					<li className="sitebar__elementList">
						<Link to="/Music" className="sitebar__lincList">Music</Link>
					</li>
				</ul>
				<div className="sitebar__setingsBlock">
					<Link to='/Settings' className="sitebar__setingsLinc">Settings</Link>
				</div>
			</div>
		</div>
	);
}
export default Sitebar;