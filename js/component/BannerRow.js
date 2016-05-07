import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import ReactSwipe from 'react-swipe';

export default class BannerRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    handleChange(index, fromIndex) {
        console.log("current position >%s %s", index, fromIndex);
    };

    render() {

        const styles = {
            img: {
                width: '100%',
                height: 100,
                background: 'no-repeat'
            }
        };

        const banners = [
            {i: 'http://b0.box.bdimg.com/searchbox/image/cmsuploader/20160430/1461979570197280.jpg'},
            {i: 'http://bcscdn.baidu.com/browserservice/boxapp/8c/8c865d05bc72bf052a2a02324bdb673e.jpg'},
            {i: 'http://bcscdn.baidu.com/browserservice/boxapp/03/034185cf7d08bf9c67e4a7c71df7fad0.jpg'}
        ];


        return (
            <SwipeableViews
                index={this.state.slideIndex}
                resistance={true}
                onChangeIndex={(index, fromIndex) => this.handleChange(index, fromIndex)}
            >
                {banners.map(function (banner) {
                    const bannerStyleImg = {background: 'url(' + banner.i + ')'};
                    const bannerStyle = Object.assign({}, styles.img, bannerStyleImg);
                    return <div key={banner.i} style={bannerStyle}></div>;
                })}
            </SwipeableViews>
        );

        /*return (
         <ReactSwipe className="carousel" swipeOptions={{continuous: true}}>
         <div style={styles.img}><img src={banners[0].i} /></div>
         <div style={styles.img}>PANE 2</div>
         <div style={styles.img}>PANE 3</div>
         </ReactSwipe>
         );*/
    }
}