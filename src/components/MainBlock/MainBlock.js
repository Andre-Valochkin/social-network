import './MainBlock.css';
import Profile from './Profile/Profile';
import Sitebar from './Sitebar/Sitebar';
const MainBlock = () => {
	return (
		<main className="container">
			<section className="mainBlock">
				<div className="mainBlock__wrapper">
					<Sitebar />
					<Profile />
				</div>
			</section>
		</main>
	);
}

export default MainBlock;