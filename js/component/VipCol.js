import React from 'react';
import Image from './Images';

export default class VipCol extends React.Component {


    render() {

        const styles = {
            container : {
                display:'flex',
                alignItems : 'center',
                justifyContent : 'center',
                flexBasis : '50%',
                height:70,
                boxSizing: 'border-box',
                borderRight: '1px solid #d5d5d5',
                borderBottom: '1px solid #d5d5d5',
            },

            inlineDiv : {
                display:'flex',
                flexDirection : 'column',
                paddingLeft:10
            },

            a1 : {
                fontSize:14,
                color:'#343434'
            },

            a2 : {
                fontSize:12,
                color:'#B3B3B3'
            }
        };

        const imgProps = {
            letter: 'A',
            circle: true,
            src: "http://yp.res.meizu.com/resource/mp/ic_chongliuliang.png",
            holder: 'http://yp.res.meizu.com/resource/mp/ic_chongliuliang.png',
            error: '../../img/u.png',
            size: 40,
            fontSize: 29,
            backgroundColor: '#fafafa',
            color: "#ffffff",
        };

        return (
            <div style={styles.container}>
                <Image {...imgProps} />
                <div style={styles.inlineDiv}>
                    <a style={styles.a1}>新增项目</a>
                    <a style={styles.a2}>手机端连接inweb</a>
                </div>
            </div>
        );

    }

}
