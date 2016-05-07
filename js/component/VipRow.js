import React from 'react';


export default class VipRow extends React.Component {

    render() {

        const styles = {

            container : {

                display : 'flex',
                flexDirection : 'row',
                flexWrap : 'wrap',

            }
        };

        return (<div style={styles.container}>

            {this.props.children}

        </div>);
    }

}
