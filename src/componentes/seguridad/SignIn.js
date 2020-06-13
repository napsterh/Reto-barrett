import React, { Component } from 'react'
import { Container, Typography, TextField, Button, Grid, Link } from '@material-ui/core';
import { compose } from 'recompose';
import { consumerFirebase } from '../../servidor';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';


const style = {
    paper: {
        marginTop: 80,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    form: {
        width: "100%",
        marginTop: 5,
        marginBottom: 5
    },
    button: {
        marginTop: 20
    },
    root: {
        maxWidth: 345,
        margin: 20
      },
    media: {
       height: 164,
       width:  345
    },
    submit: {
        marginTop: 10,
        marginBottom: 20
    }
}


class SignIn extends Component {

    state = {
        firebase : null,
        usuario : {
            email : '',
            password : ''
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){

        if(nextProps.firebase === prevState.firebase){
            return null;
        }
        return {
            firebase : nextProps.firebase
        }
    }

    onChange = e =>{
        let usuario = Object.assign({},this.state.usuario);
        usuario[e.target.name] = e.target.value;
        this.setState({
            usuario : usuario
        })
    }

    signin = async e => {
        e.preventDefault();
        const { firebase, usuario } = this.state;

        firebase.auth
        .signInWithEmailAndPassword(usuario.email, usuario.password)
        .then(auth => {
            this.props.history.push('/');
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <Container maxWidth="xs">
                <div style={style.paper}>
                    <Card style={style.root}>
                        <CardActionArea>
                            <CardMedia style={style.media}
                                image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStPdNDPx_YjkbUXU2ItVmXIg8QQy82UeWpsZ3_wFM4U2dEY0nh&usqp=CAU'
                            />
                        </CardActionArea>
                    </Card>
                    <Typography component="h1" variant="h5">
                        Iniciar sesión
                    </Typography>
                    <form style={style.form}>
                        <TextField
                            variant="outlined"
                            label="Ingrese correo electrónico"
                            name="email"
                            fullWidth
                            margin="normal"
                            onChange = {this.onChange}
                            value = {this.state.usuario.email}
                        />
                        <TextField
                            variant="outlined"
                            label="Ingrese contraseña"
                            type="password"
                            name="password"
                            fullWidth
                            margin="normal"
                            onChange = {this.onChange}
                            value = {this.state.usuario.password}
                        />
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        onClick={this.signin}
                        /*style={style.submit}*/
                        >
                            Enviar
                        </Button>

                        <Grid container>
                            <Link href="#" variant="body2" onClick={this.resetearPassword}>
                                {"Olvidó su contraseña?"}
                            </Link>
                        </Grid>
                        <Grid>
                            <Link href="/auth/registrarUser" variant="body2">
                                {"No tienes una cuenta? Regístrate"}
                            </Link>
                        </Grid>
                    </form>
                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        style={style.submit}
                        href="#"
                    >
                        Ingrese con su teléfono
                    </Button>
                </div>
            </Container>
        )
    }
}


export default compose(consumerFirebase)(SignIn);