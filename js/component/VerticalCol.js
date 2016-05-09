import React from 'react';
import Images from './Images';

class VerticalCol extends React.Component {

    render() {
        const item = this.props
        const styles = this.getAllStyle();
        const images = this.getImageStyle();
        return (
            <div style={styles.col}>
                <Images {...images}/>
                <a style={styles.a}>{item.title}</a>
            </div>
        )
    }

    getImageStyle() {
        const item = this.props
        const letter = item.title.charAt(0);
        return {
            letter: letter,
            circle: true,
            src: '../../' + item.icon,
            holder: '../../' + item.icon,
            error: '../../images/space.png',
            size: 40,
            fontSize: 29,
            backgroundColor: '#fafafa',
            color: "#ffffff",
        }
    }

    getAllStyle() {

        const drawablePadding = this.props.drawablePadding || 0;

        return {
            col: {
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                justifyContent: 'center',
                alignItems: 'center',
                flexBasis: '25%',
                height: 68,
                order: -this.props.weight,
                marginTop:drawablePadding
            },

            a: {
                fontSize: 12,
                paddingTop: drawablePadding,
                paddingBottom: drawablePadding,
                color: '#7d7d7d',
            }
        }
    }

}

export default VerticalCol;