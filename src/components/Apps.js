
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
//import { Provider } from 'react-redux';
//import { createStore } from 'redux';

//import Reducer from './redux/reducer/reducer';
import { SideMenu } from './Routers';

StatusBar.setHidden(true);

export default class Apps extends Component {
    //store = createStore(Reducer);
    render() {
        return (
            //<Provider store={this.store}>
            <SideMenu />
            //</Provider>
        );
    }
}
