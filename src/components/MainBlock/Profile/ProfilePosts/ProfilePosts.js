import './ProfilePosts.css';
import ProfilePostsElement from './ProfilePostsElement/ProfilePostsElement.js';

const ProfilePosts = () => {
	return (
		<div className='profilePosts__wrapper'>
			<ProfilePostsElement massege='Первый пропс переданый мной!' like='23' name='Bася' age='34' />
			<ProfilePostsElement massege='Второй пропс переданый мной!' like='24' name='Олег' age='43' />
			<ProfilePostsElement massege='Третий и ничем не отличающийся от двух предыдущих, пропс переданый мной!' like='37' name='Снижана' age='' />
			<ProfilePostsElement massege='Четвертый пропс переданый мной!' like='22' name='Виталик' age='45' />
			<ProfilePostsElement massege='Пятый и пожалуй последний. Но тоже такой же самый как и предыдущие четыри пропса. Вообщем на создавал одинаковых пропсов и радуюсь теперь. Какой я молодец...!!!' like='146' name='Андрей' age='36' />
		</div>
	);
}

export default ProfilePosts;