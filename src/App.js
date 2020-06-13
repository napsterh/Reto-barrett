import React, { Component, useEffect } from 'react';
import './App.css';
import ListaHobbies from './componentes/vistas/ListaHobbies';
import AppNavbar from './componentes/design/AppNavbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import tema from './tema/tema';
import { Grid } from '@material-ui/core';
import SignUp from './componentes/seguridad/SignUp';
import SignIn from './componentes/seguridad/SignIn';
import { FirebaseContext } from './servidor';


function App(props) {
  let firebase = React.useContext(FirebaseContext);
  const [authIniciada, setupFirebaseInicial] = React.useState(false);

  useEffect(() => {
    firebase.isIniciado().then(val => {
      setupFirebaseInicial(val);
    })
  })

  return authIniciada !== false ?(
    <BrowserRouter>
      <MuiThemeProvider theme={tema}>
        <AppNavbar />

        <Grid container>
          <Switch>
            <Route path="/" exact component={ListaHobbies} />
            <Route path="/sec/signup" exact component={SignUp} />
            <Route path="/sec/signin" exact component={SignIn} />
          </Switch>
        </Grid>

      </MuiThemeProvider>
    </BrowserRouter>
  )
  : null;
}

export default App;
