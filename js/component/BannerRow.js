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

    handleChange() {
        this.setState({
            slideIndex: value,
        });
    };

    render() {

        const styles = {
            img: {
                width: '100%',
                height: 150,
                background: 'no-repeat'
            }
        };

        const banners = [
            {i: 'http://b0.box.bdimg.com/searchbox/image/cmsuploader/20160430/1461979570197280.jpg'},
            {i: 'http://bcscdn.baidu.com/browserservice/boxapp/8c/8c865d05bc72bf052a2a02324bdb673e.jpg'},
            {i: 'http://bcscdn.baidu.com/browserservice/boxapp/03/034185cf7d08bf9c67e4a7c71df7fad0.jpg'}
        ];


        /*return (
         <div>
         <SwipeableViews
         index={this.state.slideIndex}
         /!*onChangeIndex={(value) => this.handleChange(value)}*!/
         >
         {banners.map(function (banner) {
         const bannerStyleImg = {background: 'url(' + banner.i + ')'};
         const bannerStyle = Object.assign({}, styles.img, bannerStyleImg);
         return <div key={banner.i} style={bannerStyle}></div>;
         })}
         </SwipeableViews>
         </div>
         );*/

        return (
            <div>
                <ReactSwipe className="carousel" swipeOptions={{continuous: false}}
                >
                    {
                        banners.map(banner => {
                            const bannerStyleImg = {background: 'url(' + banner.i + ')'};
                            return <div key={banner.i} style={Object.assign({}, styles.img, bannerStyleImg)}></div>;
                        })
                    }
                </ReactSwipe>
            </div>
        );
    }
}