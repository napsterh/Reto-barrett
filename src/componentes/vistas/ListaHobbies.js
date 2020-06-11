import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class ListaHobbies extends Component {
    render() {
        return (
            <div>
                <Button variant="contained" color="primary">primary</Button>
                <Button variant="contained" color="secondary">secondary</Button>
            </div>
        )
    }
}
