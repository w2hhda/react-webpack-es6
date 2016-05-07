import React from 'react';

class Grid extends React.Component {

	render() {

		const styles={
			grid:{
				display:'flex',
				flexDirection:'column',
				flexWrap: 'nowrap',
			}
		};

		const outStyle = {
			height : this.props.height,
		};

		const allStyle = Object.assign({}, outStyle, styles.grid);

		return (
		<div style={allStyle}>
			{this.props.children}
		</div>);
	}

}

export default Grid;