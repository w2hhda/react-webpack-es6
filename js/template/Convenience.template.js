
import React, { Component, PropTypes } from 'react'
import Grid from "../component/Grid";
import VerticalCol from "../component/VerticalCol";
import VerticalRow from "../component/VerticalRow";
import SectionRow  from "../component/SectionRow";
import DividerRow  from "../component/DividerRow";
import {reverseByWeight} from  '../constants/utils'

export default class Convenience extends Component {

    render() {

        console.log("Convenience render", this.props);

        const category = this.props
        reverseByWeight(category.items)

        if (category && category.items && category.items.length) {
            return (
                <Grid order={-category.weight}>
                    {category.title && <SectionRow value={category.title}/>}
                    <VerticalRow>
                        {
                            category.items.map(item => {
                                return <VerticalCol {...item} key={item.item_id}/>
                            })
                        }
                    </VerticalRow>
                    <DividerRow />
                </Grid>
            );
        } else {
            return <div />;
        }
    }


}