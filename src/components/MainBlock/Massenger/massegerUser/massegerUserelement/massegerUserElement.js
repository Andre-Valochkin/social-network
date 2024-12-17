import { NavLink } from 'react-router-dom';
import a from './../massegerUser.module.css';


const MassegerUserListElement = (props) => {

	let path = "/massenger/" + props.id;

	return (
		<li className={a.massegerUser__listElement}>
			<NavLink to={path} className={a.massegerUser__listLink}>{props.name}</NavLink>
		</li>
	);

}
export default MassegerUserListElement;