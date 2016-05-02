import React from 'react';


export default class DividerRow extends React.Component {

    render() {
        const styles = {
            div : {
                width:'100%',
                height:15,
                background:'#f0f0f0'
            }
        };

        return (
            <div style={styles.div}></div>
        );
    }

}
