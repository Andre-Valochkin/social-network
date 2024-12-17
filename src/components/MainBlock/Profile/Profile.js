import './Profile.css';
import ProfileHeader from './ProfileHeader/ProfileHeader.js';
import ProfileUser from './ProfileUser/ProfileUser.js';
import ProfileTexteria from './ProfileTexteria/ProfileTexteria.js';
import ProfilePosts from './ProfilePosts/ProfilePosts.js';

const Profile = (props) => {
	return (
		<div className='profile__wrapper'>
			<ProfileHeader />
			<ProfileUser />
			<ProfileTexteria />
			<ProfilePosts profilePostsData={props.profilePostsData} />
		</div>
	);
}

export default Profile;