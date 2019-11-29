import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';

class UsuarioGithub extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dados: {},
      usuario: 'octocat'
    }

    this.fetchDados = this.fetchDados.bind(this);
  }

  fetchDados() {
    fetch(`https://api.github.com/users/${this.state.usuario}`)
      .then(response => response.json())
      .then(json => this.setState({dados: json}))
      .catch(err => this.setState({dados: {err}}))
  }

  componentDidMount() {
    this.fetchDados();
  }

  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.state.dados)}</Text>
        <View>
          <TextInput 
            onChangeText={ usuario => {this.setState({usuario})} }
            value={this.state.usuario}>
          </TextInput>
        </View>
        <View>
          <Button 
            onPress={this.fetchDados} 
            title="Buscar Dados"
            accessibilityLabel="Busque os dados do usuário no GitHub"
          />
        </View>
      </View>
    )
  }

}

export default UsuarioGithub;