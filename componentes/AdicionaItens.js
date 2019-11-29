import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Alert
} from 'react-native';

import { db } from '../config/config';

class AdicionaItens extends React.Component {
  state = {
    item: ''
  };

  salvaItem = () => {
    db.ref('/itens').push({
      item: this.state.item
    });

    Alert.alert('Item salvo!');
  };

  render() {
    return (
      <View style={styles.conteudoPrincipal}>
        <Text style={styles.titulo}>Adicionar item</Text>
        <TextInput style={styles.itemInput} onChangeText={ item => { this.setState({item})} } />
        <TouchableHighlight
          style={styles.btn}
          underlayColor="white"
          onPress={this.salvaItem}
        >
          <Text style={styles.textoBtn}>Adicionar</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default AdicionaItens;

const styles = StyleSheet.create({
  conteudoPrincipal: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'green'
  },
  titulo: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  textoBtn: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  btn: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});