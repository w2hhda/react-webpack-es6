import React from 'react';
import ServicesCol from './ServicesCol';

export default class ServicesRow extends React.Component {

    render() {

        const styles = {

            container: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'nowrap',
                height: 90
            }

        };

        let tileData = [
            {
                id: "1",
                title: "XXXXXX",
                img: "http://yp.res.meizu.com/resource/mp/ic_chongliuliang.png"
            },
            {
                id: "2",
                title: "XXXXXX",
                img: "http://yp.res.meizu.com/resource/mp/ic_chongliuliang.png"
            },
            {
                id: "3",
                title: "XXXXXX",
                img: "http://yp.res.meizu.com/resource/mp/ic_chongliuliang.png"
            }
            ,
            {
                id: "4",
                title: "XXXXXX",
                img: "http://yp.res.meizu.com/resource/mp/ic_chongliuliang.png"
            }
        ];

        tileData = tileData.slice(0, 3);

        return (<div style={styles.container}>
            {
                tileData.map(function (tile) {

                    const flexBasis = (100 / tileData.length) + '%';
                    const props = {
                        flexBasis : flexBasis,
                        tile : tile
                    };
                    return <ServicesCol key={tile.id} {...props}></ServicesCol>
                })
            }

        </div>);

    }

}