import React, { Component } from 'react';
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { compose } from 'recompose';
import { consumerFirebase } from '../../servidor';
import { crearUsuario } from '../../sesion/action/sesionAction';
import { StateContext } from '../../sesion/store';

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


const usuarioInicio = {
    nombre : '',
    apellido : '',
    email : '',
    password : ''
}

class SignUp extends Component {
    static contextType = StateContext;

    state = {
        firebase : null,
        usuario : {
            nombre : '',
            apellido : '',
            email : '',
            password : ''
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){

        if(nextProps.firebase  === prevState.firebase){
            return null;
        }
        return {
            firebase : nextProps.firebase
        }
    }

    onChange = e => {
        let usuario = Object.assign({}, this.state.usuario);
        usuario[e.target.name] = e.target.value;
        this.setState({
            usuario : usuario
        })
    }

    userRegister = async e => {
        e.preventDefault();
        const [{sesion}, dispatch] = this.context;
        const {firebase, usuario} = this.state;

        let callback = await crearUsuario(dispatch, firebase, usuario);
        if(callback.status){
            this.props.history.push("/")
        }else{
            this.props.history.push("/sec/signup");
        }

    }

    render() {
        return (
            <Container maxWidth="md">
                <div style={style.paper}>
                    <Card style={style.root}>
                        <CardActionArea>
                            <CardMedia style={style.media}
                                image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStPdNDPx_YjkbUXU2ItVmXIg8QQy82UeWpsZ3_wFM4U2dEY0nh&usqp=CAU'
                            />
                        </CardActionArea>
                    </Card>
                    <Typography component="h1" variant="h5">
                        Registrar Usuario
                    </Typography>
                    <form style={style.form}>
                        <Grid container spacing={2} justify="center">
                            <Grid item md={6} xs={8}>
                                <TextField name="nombre" onChange={this.onChange} value={this.state.usuario.nombre} fullWidth label="Ingrese su nombre" />
                            </Grid>
                            <Grid item md={6} xs={8}>
                                <TextField name="apellido"  onChange={this.onChange} value={this.state.usuario.apellido} fullWidth label="Ingrese sus apellidos" />
                            </Grid>
                            <Grid item md={6} xs={8}>
                                <TextField name="email"  onChange={this.onChange} value={this.state.usuario.email} fullWidth label="Ingrese su correo electrónico" />
                            </Grid>
                            <Grid item md={6} xs={8}>
                                <TextField type="password" onChange={this.onChange} value={this.state.usuario.password} name="password" fullWidth label="Ingrese su contraseña" />
                            </Grid>
                        </Grid>
                        <Grid container justify="center">
                            <Grid item md={3} xs={3}>
                                <Button type="submit" onClick={this.userRegister} variant="contained" fullWidth size="large" color="secondary" style={style.submit}>
                                    Registrar
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        )
    }
}

export default compose(consumerFirebase)(SignUp);