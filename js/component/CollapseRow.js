
import React from 'react';


export default class CollapseRow extends React.Component {


    constructor() {
        super();
        this.state = {
            collapse : true
        }
    }

    render() {

        const transform = this.state.collapse ? 'rotateX(0deg)' : 'rotateX(180deg)';

        const styles = {
            div : {
                width:'100%',
                height:35,
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
            },
            img :{
                height:12,
                width:20,
                transform: transform,
            }
        };

        return (
            <div style={styles.div} onClick={e => this.handleClick(e)}>
                <img style={styles.img} src={'../../images/alow.png'}/>
            </div>
        );
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({
            collapse : !this.state.collapse
        });
        this.props.onCollapseClick(e, this.state.collapse);
    }
}
