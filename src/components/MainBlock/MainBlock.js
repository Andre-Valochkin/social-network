import './MainBlock.css';
import Sitebar from './Sitebar/Sitebar';
import router from './Routes/router.js';

import { Routes, Route, Form } from 'react-router-dom';

const MainBlock = (props) => {

	const RouteData = router.map((el) =>

		<Route path={el.path} element={el.element} />

	);

	return (
		<main className="container">
			<section className="mainBlock">
				<div className="mainBlock__wrapper">
					<Sitebar />
					<Routes>

						{RouteData}

					</Routes>
				</div>
			</section>
		</main>
	);
}

export default MainBlock;