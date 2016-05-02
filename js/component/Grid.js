import React from 'react';

class Grid extends React.Component {

	

	render() {

		const styles={
			grid:{
				display:'flex',
				flexDirection:'column',
				flexWrap: 'nowrap',
			}
		}

		return (
		<div style={styles.grid}>
			{this.props.children}
		</div>);
	}

}

export default Grid;