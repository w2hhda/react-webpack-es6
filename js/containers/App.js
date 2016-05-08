import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import isNumberTemplate from '../constants/constants'
import isBannerTemplate from '../constants/constants'
import isConvenienceTemplate from '../constants/constants'

import NumberTemplate from '../template/NumberTemplate'
import BannerTemplate from '../template/BannerTemplate'
import ConvenienceTemplate from '../template/ConvenienceTemplate'

import { fetchCategory } from '../actions'

class App extends Component {

    constructor(props) {
        super(props)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

    componentDidMount() {
        console.log("App componentDidMount");
        const { dispatch, lang, version } = this.props
        dispatch(fetchCategory({lang: lang, version: version}))
    }

    handleRefreshClick(e) {
        e.preventDefault()
        console.log("========handleRefreshClick===> ");
        const { dispatch, lang, version } = this.props
        dispatch(fetchCategory({lang: lang, version: version}))
    }

    componentWillReceiveProps(nextProps) {
        console.log("App componentWillReceiveProps", nextProps);
        const { dispatch, lang, version } = nextProps
        dispatch(fetchCategory({lang: lang, version: version}))
    }

    render() {

        const {categorise} = this.props

        console.log("App render", categorise);

        return (
            <div>
                <button onClick={this.handleRefreshClick}>button</button>
                <div style={{paddingTop : 58}}>
                    {
                        categorise && categorise.map(function (category) {
                            if (isNumberTemplate(category.categoryId)) {
                                return <NumberTemplate {...category}/>
                            } else if (isBannerTemplate(category.categoryId)) {
                                return <BannerTemplate {...category}/>
                            } else if (isConvenienceTemplate(category.categoryId)) {
                                return <ConvenienceTemplate {...category} />
                            }
                        })
                    }
                </div>
            </div>
        );
    }
}

App.propTypes = {
    rootIn: PropTypes.string.isRequired,
    categorise: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {

    return {
        rootIn: state.rootIn,
        categorise: state.categorise,
        isFetching: state.isFetching,
        lastUpdated: state.lastUpdated,
        lang: state.lang,
        version: state.version
    }
}

export default connect(mapStateToProps)(App)