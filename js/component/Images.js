import React from 'react';

class Image extends React.Component {

    constructor(props) {
        super();
        this.state = {
            letterDisplay: 'none',
            avatarDisplay: 'block',
            avatarUrl: props.src
        };
    }

    handleError() {
        this.setState({
            letterDisplay: 'none',
            avatarDisplay: 'block',
            avatarUrl: this.props.error
        });
    }

    render() {

        const prop = this.props;
        const states = this.state;


        console.log("====> %s", states.letterDisplay);

        const styles = {

            container: {
                backgroundColor: prop.backgroundColor,
                height: prop.size,
                width: prop.size,
                display: '-webkit-box',
                display: '-webkit-flex',
                display: '-ms-flexbox',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: (prop.size / 2),
            },

            text: {
                color: prop.color,
                fontSize: prop.fontSize,
                display: states.letterDisplay
            },

            image: {
                height: prop.size,
                width: prop.size,
                borderRadius: (prop.size / 2),
                display: states.avatarDisplay
            }
        };

        return (
            <div style={styles.container}>
                <a style={styles.text} ref="a">{this.props.letter}</a>
                <img style={styles.image} src={states.avatarUrl} ref="img" onError={()=>this.handleError()}/>
            </div>
        );

    }

}

export default Image;