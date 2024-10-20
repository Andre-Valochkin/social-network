import './ProfileTexteria.css';

const ProfileTexteria = () => {
	return (
		<div className='profileTexteria__wrapper'>
			<div className='profileTexteria__title'>
				Новый пост
			</div>
			<form className='profileTexteria__form'>
				<textarea className='profileTexteria__input' type='text' placeholder='Ваша новость'></textarea>
				<button className='profileTexteria__btn' >Отправить</button>
			</form>
		</div>
	);
}

export default ProfileTexteria;