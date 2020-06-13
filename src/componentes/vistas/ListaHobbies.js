import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Container, Paper, Grid, Breadcrumbs, Link, Typography, TextField, Card, CardContent, CardActions, ButtonGroup } from '@material-ui/core';
import CardMedia from "@material-ui/core/CardMedia";
import { consumerFirebase } from '../../servidor';
import logo from '../../logo.svg';

const style = {
    paper : {
        marginTop : 80,
        display : "flex",
        flexDirection : "column",
        alignItems : "center"
    },
    form : {
        width : "100%",
        marginTop : 10
    },
    submit : {
        marginTop : 20,
        marginBottom: 20
    },
    root: {
        maxWidth: 345,
        margin: 20
      },
    media: {
        height: 164,
        width:  345
    }
}


class ListaHobbies extends Component {

    render() {
        return (
            <Container maxWidth="xs">
                <div style={style.paper}>
                    <form style={style.form}>
                        <TextField
                            variant="outlined"
                            label="Ingrese un nuevo hobbie"
                            name="email"
                            fullWidth
                            margin="normal"
                            /*onChange = {this.onChange}
                            value = {this.state.usuario.email}*/
                        />
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        /*</form>onClick={this.signin}
                        style={style.submit}*/
                        >
                            Insertar
                        </Button>
                    </form>
                </div>
                
            </Container>
        );
    };
};

export default consumerFirebase(ListaHobbies);