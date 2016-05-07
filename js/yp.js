import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import App from './container/index';

//将state.counter绑定到props的counter
function mapStateToProps(state) {
    return {
        data : state.data
    }
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps)(App)