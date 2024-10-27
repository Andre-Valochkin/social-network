import './MainBlock.css';
import Profile from './Profile/Profile';
import Sitebar from './Sitebar/Sitebar';

import Massenger from "./Massenger/Massenger";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

import { Routes, Route } from 'react-router-dom';

const MainBlock = () => {
	return (
		<main className="container">
			<section className="mainBlock">
				<div className="mainBlock__wrapper">
					<Sitebar />
					<Routes>
						<Route path='/' element={<Profile />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/news' element={<News />} />
						<Route path='/music' element={<Music />} />
						<Route path='/massenger' element={<Massenger />} />
						<Route path='/Settings' element={<Settings />} />
					</Routes>
				</div>
			</section>
		</main>
	);
}

export default MainBlock;