import React, { Component } from 'react';
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';


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

class SignUp extends Component {

    state = {
        usuario : {
            nombre : '',
            apellido : '',
            email : '',
            password : ''
        }
    }

    onChange = e => {
        let usuario = Object.assign({}, this.state.usuario);
        usuario[e.target.name] = e.target.value;
        this.setState({
            usuario : usuario
        })
    }

    userRegister = e => {
        e.preventDefault();
        console.log(this.state.usuario);
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
                        Sign up User
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
                                    Register
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        )
    }
}

export default SignUp;