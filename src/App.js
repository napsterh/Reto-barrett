import React, { Component } from 'react';
import './App.css';
import ListaHobbies from './componentes/vistas/ListaHobbies';
import AppNavbar from './componentes/design/AppNavbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import tema from './tema/tema';
import { Grid } from '@material-ui/core';
import SignUp from './componentes/seguridad/SignUp';
import SignIn from './componentes/seguridad/SignIn';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <MuiThemeProvider theme={tema}>
          <AppNavbar/>

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
  }
}

export default App;
