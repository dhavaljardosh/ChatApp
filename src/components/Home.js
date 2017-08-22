import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

class Home extends React.Component{
  render(){
    return(
      <View>
        <Text style={styles.title}>
          Enter your name:
        </Text>
        <TextInput
              style={styles.nameInput}
              place="John Snow"
        />
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
    }
});

export default Home;
