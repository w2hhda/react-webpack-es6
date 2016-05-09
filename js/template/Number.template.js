import React from 'react'
import {reverseByWeight} from  '../constants/utils'
import Grid from "../component/Grid";
import VerticalCol from "../component/VerticalCol";
import VerticalRow from "../component/VerticalRow";
import DividerRow  from "../component/DividerRow";

export default class Number extends React.Component {

    render() {
        console.log("Number render", this.props);
        const category = this.props
        reverseByWeight(category.items)

        if (category && category.items && category.items.length) {
            return (
                <Grid order={-category.weight}>
                    <VerticalRow>
                        {
                            category.items.map(item => {
                                return <VerticalCol drawablePadding={5} {...item} key={item.item_id}/>
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
