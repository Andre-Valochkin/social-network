import a from './massegerMasseg.module.css';

const MassegerMasseg = (props) => {

	const massegElement = props.massegData.map((el) => <div > {el.masseg} </div>);

	return (
		<div className={a.massegerMasseg}>
			{massegElement}
		</div>
	);

}

export default MassegerMasseg;