import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "react-navigation";

class Home extends React.Component {
	render() {
		return (
      <View style={{ 
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center" 
      }}>
        <Button
          title="Dimensoes Fixas"
          onPress={() => 
            this.props.navigation.navigate('DimensoesFixas')
          }
        />
      </View>
    );
	}
}

export default Home;