import React from 'react';
import { Button } from 'react-bootstrap';
//import {Grid, Row, Col} from 'react-flexbox-grid';
//import {Grid, Row, Col} from 'react-bootstrap';
import Grid  from './component/Grid'
import Row  from './component/Row'
import Col  from './component/Col'
import Images from './component/Images';
import VerticalCol from './component/VerticalCol';
import VerticalRow from './component/VerticalRow';
import SectionRow from './component/SectionRow';
import DividerRow from './component/DividerRow';
import CollapseRow from './component/CollapseRow';
import BannerRow from './component/BannerRow';


class Hello extends React.Component {

    render() {


        return (
            <div>
                <Grid>
                    <SectionRow value={"便捷服务"}></SectionRow>
                    <VerticalRow>
                        <VerticalCol></VerticalCol>
                        <VerticalCol></VerticalCol>
                        <VerticalCol></VerticalCol>
                        <VerticalCol></VerticalCol>
                        <VerticalCol></VerticalCol>
                        <VerticalCol></VerticalCol>
                        <VerticalCol></VerticalCol>
                        <VerticalCol></VerticalCol>
                        <VerticalCol></VerticalCol>
                    </VerticalRow>
                    <DividerRow></DividerRow>
                </Grid>
                <Grid>
                    <BannerRow></BannerRow>
                    <DividerRow></DividerRow>
                </Grid>
            </div>
        );
    }

}

export default Hello;