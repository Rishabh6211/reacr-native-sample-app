import React, { Component } from "react";
import { Actions } from 'react-native-router-flux'
import { FlatList, StyleSheet, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Icon, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right, List, ListItem } from 'native-base';
import { Avatar,Overlay } from 'react-native-elements'
import { connect } from 'react-redux';
import { Get_data } from '../actions/user'
class DetailComponent extends Component {



  constructor(props) {
    super(props);
    this.state = {
      users: []
    };

  }

  render() {
    
    return (

      <View style={styles.container}>
       
      <Overlay isVisible={this.state.isVisible}>
      <Text>Hello from Overlay!</Text>
    </Overlay>;
    
    {
      this.state.visible && (
        <Overlay isVisible>
          <Text>Hello from Overlay!</Text>
        </Overlay>
      )
    }
    
    <Overlay
      isVisible={this.state.isVisible}
      windowBackgroundColor="rgba(255, 255, 255, .5)"
      overlayBackgroundColor="red"
      width="auto"
      height="auto"
    >
      <Text>Hello from Overlay!</Text>
    </Overlay>;


      </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {

    flex: 1
  },
  container1: {
    flex: .2
  },
  container2: {
    flex: 0.1,
    alignItems: 'center',
  },
  container3: {
    padding: 10,
    flex: 0.7,
    flexDirection: 'column'
  },
  image: {
    width: null,
    height: 150
  }
});

const mapStateToProps = (state) => {
  return { users: state.users ? state.users : null }
}

export default connect(mapStateToProps, { getData: Get_data })(DetailComponent)