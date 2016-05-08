

import React from 'react';
import Grid from '../component/Grid';
import BannerRow from '../component/BannerRow';
import DividerRow from '../component/DividerRow';

class BannerTemplate extends React.Component {

    render() {
        return (
            <Grid>
                <BannerRow></BannerRow>
                <DividerRow></DividerRow>
            </Grid>
        );
    }
}

export default BannerTemplate;
