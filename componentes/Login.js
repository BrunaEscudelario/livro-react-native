import React from 'react'
import { View, Text } from 'react-native'
import Estilos from '../estilos/Estilos'

function login(usuario, senha) {
  console.log('usuario', usuario);
  console.log('senha', senha);
  if (usuario === "usuario" && senha === "123") {
    return <Text style={Estilos.text}>Usuário autenticado</Text>
  } else {
    return <Text style={Estilos.text}>Login ou senha incorretos</Text>
  }
}

export default props =>
  <View> 
    { login(props.usuario, props.senha) }
  </View> 