import React from 'react';
import YellowPages from './yellowpages';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        {() => <YellowPages />}
    </Provider>
    ,
    document.getElementById("app"));


