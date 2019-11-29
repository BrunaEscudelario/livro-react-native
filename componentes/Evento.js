import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Estilos from '../estilos/Estilos';

class Evento extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit() {
    console.log('valor atual 4', this.input.current.props);
  }

  render() {
    return (
      <View style={Estilos.container}>
        <TextInput 
          style={Estilos.input} 
          ref={this.input}
          onChangeText={this.handleSubmit}>
        </TextInput>
      </View>
    )
  }
}

export default Evento;