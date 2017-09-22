
import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { SideMenu } from './Routers';

StatusBar.setHidden(true);

export default class Apps extends Component {
    render() {
        return (
            <SideMenu />
        );
    }
}
