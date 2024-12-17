import a from './Sitebar.module.css';
import { NavLink } from 'react-router-dom';


const Sitebar = () => {
	return (
		<div className={a.sitebar}>
			<div className={a.sitebsr__wrapper}>
				<ul className={a.sitebar__list}>
					<li className={a.sitebar__elementList}>
						<NavLink to="/" className={({ isActive }) => isActive ? a.active : undefined}>
							Профиль</NavLink>
					</li>
					<li className={a.sitebar__elementList}>
						<NavLink to="/massenger" className={({ isActive }) => isActive ? a.active : undefined}>Сообщение</NavLink>
					</li>
					<li className={a.sitebar__elementList}>
						<NavLink to="/news" className={({ isActive }) => isActive ? a.active : undefined}>Новости</NavLink>
					</li>
					<li className={a.sitebar__elementList}>
						<NavLink to="/music" className={({ isActive }) => isActive ? a.active : undefined}>Музыка</NavLink>
					</li>
				</ul>
				<div className={`${a.sitebar__elementList} ${a.sitebar__setingsBlock}`}>
					<NavLink to='/settings' className={({ isActive }) => isActive ? a.active : undefined}>Настройки</NavLink>
				</div>
			</div>
		</div >
	);
}
export default Sitebar;