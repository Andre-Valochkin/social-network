import './Massenger.css';
import MassegerUser from './massegerUser/massegerUser';
import MassegerMasseg from './massegerMasseg/massegerMasseg';


const Massenger = (props) => {
	return (
		<div className='massenger__wrapper'>
			<MassegerUser userData={props.userData} />
			<MassegerMasseg massegData={props.massegData} />
		</div>
	);
}

export default Massenger;
