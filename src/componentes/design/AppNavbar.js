import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import SesionBar from './bar/SesionBar';

export default class AppNavbar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <SesionBar></SesionBar>
                </AppBar>
            </div>
        )
    }
}
