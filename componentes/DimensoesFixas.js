import React from 'react';
import { View } from 'react-native';

class DimensoesFixas extends React.Component {
  render() {
    return (
      <View style={{width: '100%', height: '100%', 
        flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}}>
        <View style={{flexShinrk: 1, flexBasis: 300, backgroundColor: 'powderblue'}} />
        <View style={{flexShrink: 3, flexBasis: 300, backgroundColor: 'skyblue'}} />
        <View style={{flexShrink: 1, flexBasis: 300, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

export default DimensoesFixas;