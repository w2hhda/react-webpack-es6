
import React, { Component, PropTypes } from 'react'

import Grid from "../component/Grid";
import VerticalCol from "../component/VerticalCol";
import VerticalRow from "../component/VerticalRow";
import SectionRow  from "../component/SectionRow";
import DividerRow  from "../component/DividerRow";

export default class ConvenienceTemplate extends Component {

    render() {

        console.log("ConvenienceTemplate render");

        const {category} = this.props

        return (
            <Grid>
                {category.title && <SectionRow value={category.title}/>}
                <VerticalRow>
                    {
                        category.items.map(item =>{
                            return <VerticalCol {...item}/>
                        })
                    }
                </VerticalRow>
                <DividerRow />
            </Grid>
        );
    }


}