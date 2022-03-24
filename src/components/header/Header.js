import "./header.css";

function Header(props) {
	return (
		<div className="header">
			<div className="header-title">{props.pageTitle}</div>
			<div className="header-buttons">
				<button className="header-button-add" onClick={props.handleOnClickAdd}>add</button>
				<button className="header-button-filter">filter</button>
				<button className="header-button-more">setting</button>
			</div>
		</div>
	);
}

export default Header;
