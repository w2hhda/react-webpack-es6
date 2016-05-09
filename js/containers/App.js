import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {template} from '../constants/index'

import {fetchCategory} from '../actions'

class App extends Component {

    constructor(props) {
        super(props)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

    componentDidMount() {
        console.log("App componentDidMount");
        const {dispatch} = this.props
        dispatch(fetchCategory({lang: 1, version: 2}))
    }

    handleRefreshClick(e) {
        e.preventDefault()
        console.log("========handleRefreshClick===> ");
        const {dispatch} = this.props
        dispatch(fetchCategory({lang: 1, version: 2}))
    }

    componentWillReceiveProps(nextProps) {
        console.log("App componentWillReceiveProps", nextProps);
    }

    render() {

        const categorise = this.props.categorise

        console.log("App render", categorise);

        return (
            <div style={this.getAppStyle()}>
                {
                    categorise && categorise.map(function (category) {
                        return template(category);
                    })
                }
            </div>
        );
    }

    getAppStyle() {
        return {
            paddingTop : 58,
            display:'flex',
            flexDirection:'column',
            flexWrap: 'nowrap',
        }
    }
}

App.propTypes = {
    categorise: PropTypes.array.isRequired,
}

function mapStateToProps(state) {

    const {category} = state

    return {
        categorise: category.categorise || []
    }
}

export default connect(mapStateToProps)(App)