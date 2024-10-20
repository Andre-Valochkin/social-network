import './Profile.css';
import ProfileHeader from './ProfileHeader/ProfileHeader.js';
import ProfileUser from './ProfileUser/ProfileUser.js';
import ProfileTexteria from './ProfileTexteria/ProfileTexteria.js';
import ProfilePosts from './ProfilePosts/ProfilePosts.js';

const Profile = () => {
	return (
		<div className='profile__wrapper'>
			<ProfileHeader />
			<ProfileUser />
			<ProfileTexteria />
			<ProfilePosts />
		</div>
	);
}

export default Profile;