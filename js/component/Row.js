import React from 'react';

class Row extends React.Component {

	
	render() {

		const styles={
			row:{
				width:'100%',
				display:'flex',
				flexDirection:'row',
				flexWrap: 'nowrap',
				backgroundColor:'#f0f0f0'
			}
		}

		return (
		<div style={styles.row}>
			{this.props.children}
		</div>);
	}

}

export default Row;