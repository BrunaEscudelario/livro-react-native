import React, { Component } from 'react';
import { Button, View, StyleSheet } from 'react-native';

export default class Inicial extends Component {
  render() {
    return (
      <View style={styles.conteudoBtns}>
        <Button
          title="Adicionar item"
          color="green"
          onPress={() => this.props.navigation.navigate('AdicionaItens')}
        />
        <Button style={styles.conteudoBtns}
          title="Listar itens salvos"
          color="blue"
          onPress={() => this.props.navigation.navigate('ListaItens')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    conteudoBtns: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center'
    },
  });