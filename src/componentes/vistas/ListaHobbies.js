import React, { Component, useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Grid, Link } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import firebase from '../../servidor/firebase';

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


function ListaHobbies() {



    const [hobbies, setHobbies] = useState([]);
    const [nuevosHobbies, setNuevosHobbies] = useState('');
    const [actualizarHobbies, setupActualizarHobbies] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            /*const db = firebase.firestore();
            db.collection("hobbies")
                .onSnapshot(function(data) {
                    setHobbies(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
                });*/
        };
        fetchData();
    }, []);

    const  onCreate = () => {
        /*const db = firebase.firestore();
        db.collection('hobbies').add({ name : actualizarHobbies});*/
    };

    function onDelete (id) {
        /*const db = firebase.firestore()
        db.collection('hobbies').doc(id).delete()*/
    }

    function onUpdate  (id) {
        /*const db = firebase.firestore()
        db.collection('hobbies').doc(id).set({name : actualizarHobbies})*/
    }


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
                            /*onChange = {this.onChange}
                            value = {this.state.usuario.email}*/
                        />
                        <TextField
                            variant="outlined"
                            label="Ingrese contraseña"
                            type="password"
                            name="password"
                            fullWidth
                            margin="normal"
                            /*onChange = {this.onChange}
                            value = {this.state.usuario.password}*/
                        />
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        /*onClick={this.signin}
                        /*style={style.submit}*/
                        >
                            Enviar
                        </Button>

                    </form>
                </div>
            </Container>
        )

}

export default ListaHobbies;