import './ProfilePosts.css';
import ProfilePostsElement from './ProfilePostsElement/ProfilePostsElement.js';

const ProfilePosts = (props) => {

	const ProfilepostsResultat = props.profilePostsData.map((item) =>
		<ProfilePostsElement id={item.id} massege={item.massege} like={item.like} name={item.name} age={item.age} />);


	return (
		<div className='profilePosts__wrapper'>
			{ProfilepostsResultat}

		</div>
	);
}

export default ProfilePosts;