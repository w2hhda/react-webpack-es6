import React from 'react';
import CollapseRow from './CollapseRow';

class VerticalRow extends React.Component {


    constructor() {
        super();
        this.state = {
            collapse: true
        };
    }

    render() {

        let cLen = this.props.children.length;
        let show = this.props.children;
        let hasCollapseRow = true;
        if (cLen > 8) {
            hasCollapseRow = true;
        } else {
            hasCollapseRow = false;
        }

        if (hasCollapseRow && this.state.collapse) {
            show = show.slice(0, 8);
        }

        const styles = {
            container: {
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                width: '100%',
            },

            row: {
                width: '96%',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                margin: '0 auto',
                alignSelf: 'center',
            },

            collapse: {
                display: hasCollapseRow ? 'block' : 'none'
            }
        };


        let collapseProps = {
            onCollapseClick: (e, states) => this.handleClick(e, states)
        };

        return (
            <div style={styles.container}>
                <div style={styles.row}>{show}</div>
                <div style={styles.collapse}><CollapseRow {...collapseProps}></CollapseRow></div>
            </div>
        );
    }

    handleClick(e, states) {
        e.preventDefault();
        this.setState({
            collapse: !states
        });
    }

}

export default VerticalRow