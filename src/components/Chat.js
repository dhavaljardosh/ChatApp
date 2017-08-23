import React from "react";
import GiftedChat from "react-native-gifted-chat";
import {
  View,
  Text
} from 'react-native';

class Chat extends React.Component{

  state={
    messages:[]
  };

  render(){

    return(
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) =>
          //
        }
        user={{
          _id: 1,
        }}
      />
    );
  }
}


Chat.propTypes = {
  name: React.PropTypes.string,
};

export default Chat;
