import React from 'react';
import Images from './Images';

class VerticalCol extends React.Component {

	render() {

		const styles={
			col:{
				display:'flex',
				flexDirection:'column',
				flexWrap: 'nowrap',
				justifyContent: 'center',
				alignItems: 'center',
				flexBasis:'25%',
				height:86,
				paddingTop:3,
			},

			a:{
				marginTop:5,
				fontSize: 12,
				color: '#7d7d7d',
			}
		};

		const imgProps = {
            letter:'A',
            circle:true,
            src:"http://yp.res.meizu.com/resource/mp/ic_chongliuliang.png",
            holder:'http://yp.res.meizu.com/resource/mp/ic_chongliuliang.png',
            error:'../../img/u.png',
            size:40,
            fontSize:29,
            backgroundColor: '#fafafa',
            color: "#ffffff",
        };

		return (
			<div style={styles.col}>
				<Images {...imgProps}/>
				<a style={styles.a}>火车机票</a>
			</div>
		);
	}

}

export default VerticalCol;