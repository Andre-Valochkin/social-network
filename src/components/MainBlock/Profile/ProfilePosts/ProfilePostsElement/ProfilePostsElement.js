import './ProfilePostsElement.css';

const ProfilePostsElement = () => {
	return (
		<div className='profilePostsElement__wrapper'>
			<div className='profilePostsElement__imagesBlock'>
				<img className='profilePostsElement__img' src='images/userAva/FofoUser.png' alt='Foto User' />
			</div>
			<div className='profilePostsElement__messagesUser'>
				Будущее сообщение пользователя
			</div>
		</div>
	);

}

export default ProfilePostsElement;