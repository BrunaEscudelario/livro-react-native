import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createBottomTabNavigator,
  createDrawerNavigator, 
  createAppContainer, 
  createStackNavigator
} from 'react-navigation';

import ChecaNumero from './componentes/ChecaNumero';
import DimensoesFixas from './componentes/DimensoesFixas';
import Evento from './componentes/Evento';
import Login from './componentes/Login';
import OlaMundo from './componentes/OlaMundo';
import UsuarioGithub from './componentes/UsuarioGithub';
import Home from './componentes/Home';
import Inicial from './componentes/Inicial';
import AdicionaItens from './componentes/AdicionaItens';
import ListaItens from './componentes/ListaItens';
import Contador from './componentes/Contador';


const DrawerNavigator = createDrawerNavigator(
  {
    DimensoesFixas: DimensoesFixas,
    Evento: Evento,
    Login: () => <Login usuario="usuario" senha={123} />,
    OlaMundo: OlaMundo,
    UsuarioGithub: UsuarioGithub,
    ChecaNumero:  () => <ChecaNumero numero={3}/>
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
);

const AppNavigator = createStackNavigator(
  {
    Inicial,
    AdicionaItens,
    ListaItens,
    Contador
  },
  {
    initialRouteName: 'Contador'
  }
);

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  DimensoesFixas: { screen: DimensoesFixas },
});

const App = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
