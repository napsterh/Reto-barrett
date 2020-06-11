import React, { Component } from 'react';
import './App.css';
import ListaHobbies from './componentes/vistas/ListaHobbies';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import tema from './tema/tema';

class App extends Component {
  render(){
    return(
      <MuiThemeProvider theme={tema}>
        <ListaHobbies/>
      </MuiThemeProvider>
    )
  }
}

export default App;
