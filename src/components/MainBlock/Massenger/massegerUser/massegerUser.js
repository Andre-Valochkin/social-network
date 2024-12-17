import a from './massegerUser.module.css';
import MassegerUserListElement from './massegerUserelement/massegerUserElement.js';



const MassegerUser = (props) => {


	const MassegerUserData = props.userData.map((item) =>
		<MassegerUserListElement name={item.name} id={item.id} />
	)

	return (
		<div div className={a.massegerUser} >
			<h4 className={a.massegerUser__title}>Собеседники</h4>
			<ul className={a.massegerUser__list}>
				{MassegerUserData}
			</ul>
		</div>
	);
}

export default MassegerUser;