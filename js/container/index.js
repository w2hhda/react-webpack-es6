import React from "react";

class App extends React.Component {


    //初始化渲染后触发
    componentDidMount() {
        console.log('执行componentDidMount');
        const { dispatch, selectedReddit } = this.props
        dispatch(fetchPostsIfNeeded(selectedReddit))
    }

    //每次接受新的props触发
    componentWillReceiveProps(nextProps) {
        console.log('执行componentWillReceiveProps',nextProps);
        if (nextProps.selectedReddit !== this.props.selectedReddit) {
            const { dispatch, selectedReddit } = nextProps
            dispatch(fetchPostsIfNeeded(selectedReddit))
        }
    }

    render() {

    }


}


export default App;