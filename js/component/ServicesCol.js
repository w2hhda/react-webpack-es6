import React from 'react';
import Image from './Images';

class ServicesCol extends React.Component {

    render() {

        const styles = {

            container : {
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'nowrap',
                boxSizing: 'border-box',
                borderRight: '1px solid #e0e0e0',
            },
            col: {
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 3,
                height: 62,
                width:'80%',
            },
            a: {
                marginTop: 5,
                fontSize: 14,
                color: '#7d7d7d',
            }
        };

        const imgProps = {
            letter: 'A',
            circle: true,
            src: "http://yp.res.meizu.com/resource/mp/ic_chongliuliang.png",
            holder: 'http://yp.res.meizu.com/resource/mp/ic_chongliuliang.png',
            error: '../../images/space.png',
            size: 43,
            fontSize: 29,
            backgroundColor: '#fafafa',
            color: "#ffffff",
        };

        const outStyle = {
            flexBasis : this.props.flexBasis
        };
        const allStyle = Object.assign({}, outStyle, styles.container);

        return (
            <div style={allStyle}>
                <div style={styles.col}>
                    <Image {...imgProps}/>
                    <a style={styles.a}>火车机票</a>
                </div>
            </div>
        );
    }

}

export default ServicesCol;