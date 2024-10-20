import './ProfileInfo.css';

const ProfileInfo = () => {
	return (
		<div className='profileInfo__wrapper'>
			<h1 className='profileInfo__nameUser'>Андрей Валочкин</h1>
			<ul className='profileInfo__list'>
				<li className='profileInfo__element'>Дата рождения: 24 февраля 2024г.</li>
				<li className='profileInfo__element'>Город: Запорожье</li>
				<li className='profileInfo__element'>Образование: ВПУ-27</li>
				<li className='profileInfo__element'>Веб-сайт: вразработке</li>
			</ul>
		</div>
	);
}

export default ProfileInfo;