import React,{Component} from "react";
import {Actions} from 'react-native-router-flux'
import {StyleSheet,View,Image,TouchableOpacity} from  'react-native';
import { Icon, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import {Avatar,SearchBar} from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import user from '../../user.jpg';
import bgSrc from '../../room.png';
export default class AddComponent extends Component {

    constructor(props) {
      super(props);
      
    }
   
    render() {
      
      return (
        <KeyboardAwareScrollView style={styles.container}>
        <View >
            <View style={{flex:0.1}}>
                <SearchBar
                    lightTheme
                    icon={{ type: 'font-awesome', name: 'search' }}
                    placeholder='Type Here...' />
            </View>
            <View style={{flex:0.4, padding:10, flexDirection:'column',backgroundColor:"white"}}>
           
                <Icon onPress={() => Actions.listing()} name='search' style={{fontSize: 120, color: 'gray', left:120,top:20}} />
                <View style={{padding:10, flex:0.1, alignItems: 'center'}}>
                    <Text>Search for new</Text>
                </View>
            </View>
            <View style={{padding:10,flex:0.1,alignItems: 'center'}}>
                <Text>OR</Text>
            </View>
            <View style={{flex:0.4,backgroundColor:"white"}}>
            <Icon onPress={() => Actions.user()} name='person-add' style={{fontSize: 120, color: 'gray', left:120,top:20}} />
            <View style={{padding:10, flex:0.1, alignItems: 'center'}}>
                <Text>Add new person</Text>
            </View>
            </View>
            <Icon name='add-circle' style={{fontSize: 50, color: 'steelblue', left:300,top:5}} />
        </View>
        </KeyboardAwareScrollView>
        
      );
    }

  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'column'
    },
    image:{
        width:null,
        height:150
    }
  });