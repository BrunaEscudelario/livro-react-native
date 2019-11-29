import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Itens from './Itens';

import { db } from '../config/config';

let itensRef = db.ref('/itens');

class ListaItens extends React.Component {
  state = {
    itens: []
  };

  componentDidMount() {
    itensRef.on('value', snapshot => {
      let data = snapshot.val();
      let itens = Object.values(data);
      this.setState({ itens });
    });
  }

  render() {
    return (
      <View style={styles.conteudoPrincipal}>
        { this.state.itens.length > 0 
          ? <Itens itens={this.state.itens} />
          : <Text>Não há itens salvos</Text>
        }
      </View>
    );
  }
}

export default ListaItens;

const styles = StyleSheet.create({
  conteudoPrincipal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'blue',
  }
});