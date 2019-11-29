import React, {useState} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.conteudo}>
      <Text>Contagem</Text>
      <Text style={styles.contador}>{contador}</Text>
      <Button
        title="Incrementar"
        onPress={() => setContador(contador + 1)}
      />
      <Button
        title="Decrementar"
        onPress={() => setContador(contador - 1)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  conteudo:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contador: {
    fontSize: 32
  }
});

export default Contador;