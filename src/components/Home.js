import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {
  Actions
} from 'react-native-router-flux';

class Home extends React.Component{


    state={
      name: '',
    }


  render(){
    return(
      <View>
        <Text style={styles.title}>
          Enter your name:
        </Text>
        <TextInput
              style={styles.nameInput}
              placeholder="John Snow"
              onChangeText={(text) =>{
                this.setState({
                  name:text,
                });
              }}
              value={this.state.name}
        />
        <TouchableOpacity
          onPress={() => {
            Actions.chat({
              name : this.state.name,
            });
          }}
          >
          <Text style={styles.button}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  title:{
    "fontSize":20,
    "marginTop":20,
    "textAlign":"center",
    "fontWeight":"600",
    "color":'darkgrey',
  },
  nameInput:{
    "height":40,
    "borderWidth":2,
    "borderColor":"black",
    "margin":20,
    "paddingLeft": 10,
    "paddingRight": 10,
  },
  button:{
    "textAlign":"center",
    "height":60,
    "fontSize":15,
    "fontWeight":"400"
  }
});

export default Home;
