

import React from 'react';
import Grid from '../component/Grid';
import BannerRow from '../component/BannerRow';
import DividerRow from '../component/DividerRow';

class BannerServicesTemplate extends React.Component {


    constructor() {
        
    }

    render() {
        return (
            <Grid>
                <BannerRow></BannerRow>
                <DividerRow></DividerRow>
            </Grid>
        );
    }
}

export default BannerServicesTemplate;
