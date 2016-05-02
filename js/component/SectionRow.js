import React from 'react';

export default class SectionRow extends React.Component {


    render() {

        const styles = {

            container : {
                display : 'flex',
                height : 30,
                alignItems : "center",
                boxSizing: 'border-box',
                borderBottom: '1px solid #e0e0e0',
                width:'96%',
                margin:'0 auto'
            },

            leftDraw : {
                display: 'inline-block',
                width: 2,
                height: '46%',
                marginRight: 4,
                backgroundColor: '#65bd6a',
                marginLeft : 4,

            },

            text : {
                fontSize: 13,
                paddingLeft : 2,
            }

        };

        let title = this.props.value;

        return (

            <div style={styles.container}>
                <span style={styles.leftDraw}/>
                <span style={styles.text}>{title}</span>
            </div>

        );

    }

}