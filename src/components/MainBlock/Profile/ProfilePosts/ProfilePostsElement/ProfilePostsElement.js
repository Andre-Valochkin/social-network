import './ProfilePostsElement.css';

const ProfilePostsElement = (props) => {

	return (
		<div className='profilePostsElement__wrapper'>
			<div className='profilePostsElement__imagesBlock'>
				<img className='profilePostsElement__img' src='images/userAva/FofoUser.png' alt='Foto User' />
			</div>
			<div className='profilePostsElement__infoBlokUser'>
				<div className='profilePostsElement__nameAgeBlock'>
					<h2 className='profilePostsElement__nameUser'>{props.name}</h2>
					<span className='profilePostsElement__ageUser'>возраст: <span className='profilePostsElement__ageUserNumber'>{props.age}</span></span>
				</div>
				<div className='profilePostsElement__messagesUser'>
					{props.massege}
				</div>
				<span className='profilePostsElement__blockLike'>лайки: <span>{props.like}</span></span>
			</div>
		</div>
	);

}

export default ProfilePostsElement;