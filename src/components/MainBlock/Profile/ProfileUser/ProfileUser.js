import './ProfileUser.css';
import ProfileAva from './ProfileAva/ProfileAva.js';
import ProfileInfo from './ProfileInfo/ProfileInfo.js';

const ProfileUser = () => {
	return (
		<div className='profileUser__wrapper'>
			<ProfileAva />
			<ProfileInfo />
		</div>
	);
}

export default ProfileUser;