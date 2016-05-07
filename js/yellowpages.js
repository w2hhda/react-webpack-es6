import React from "react";
import Grid from "./component/Grid";
import VerticalCol from "./component/VerticalCol";
import VerticalRow from "./component/VerticalRow";
import SectionRow from "./component/SectionRow";
import DividerRow from "./component/DividerRow";
import BannerRow from "./component/BannerRow";
import ServicesRow from "./component/ServicesRow";
import VipRow from "./component/VipRow";
import VipCol from "./component/VipCol";

class YellowPages extends React.Component {

    render() {

        const paddingTop = {
           paddingTop : 58
        };

        return (
            <div style={paddingTop}>
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
                <Grid>
                    <ServicesRow>
                    </ServicesRow>
                    <DividerRow></DividerRow>
                </Grid>
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
                    <SectionRow value={"便捷服务"}></SectionRow>
                    <VipRow>
                        <VipCol></VipCol>
                        <VipCol></VipCol>
                        <VipCol></VipCol>
                        <VipCol></VipCol>
                    </VipRow>
                    <DividerRow></DividerRow>
                </Grid>
            </div>
        );
    }

}

export default YellowPages;