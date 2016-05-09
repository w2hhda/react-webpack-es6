import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {template} from '../constants/index'

import {fetchCategory} from '../actions'

class App extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log("App componentDidMount");
        const {fetchCategory,language, version} = this.props
        fetchCategory({language: language, version: version})
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
    dataSource: PropTypes.string.isRequired,
    language  : PropTypes.number.isRequired,
    version   : PropTypes.number.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch  : PropTypes.func.isRequired,
    fetchCategory: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    const {category} = state
    return {
        categorise: category.categorise || [],
        dataSource: category.dataSource || 'file',
        language  : category.language || 1,
        version   : category.version || 14,
        isFetching: category.isFetching || false
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategory: (params) => {
            dispatch(fetchCategory(params))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)