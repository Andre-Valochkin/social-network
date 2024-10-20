import './ProfilePosts.css';
import ProfilePostsElement from './ProfilePostsElement/ProfilePostsElement.js';

const ProfilePosts = () => {
	return (
		<div className='profilePosts__wrapper'>
			<ProfilePostsElement />
			<ProfilePostsElement />
			<ProfilePostsElement />
			<ProfilePostsElement />
			<ProfilePostsElement />
		</div>
	);
}

export default ProfilePosts;