import React,{Component} from "react";
import {Actions} from 'react-native-router-flux'
import {StyleSheet,View,Image,TouchableOpacity} from  'react-native';
import { Badge,Icon, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import {Avatar,SearchBar} from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import user from '../../user.png';
import bgSrc from '../../room.png';
export default class UserComponent extends Component {

    constructor(props) {
      super(props);
      
    }
   
    render() {
      
      return (
       
        <View style={styles.container}>
            <View style={{padding:10,flex:0.4,alignItems:'center',top:20}}>
                <Avatar
                    xlarge
                    rounded
                    title="rishabh"
                    source={user}
                    activeOpacity={0.7}
                
                />         
            </View>
            <View style={{flex:0.1,flexDirection:'row'}}>
                <View style={{flex:0.5,alignItems:'center'}}><Text>Name</Text></View>
                <View style={{flex:0.5,alignItems:'center'}}><Text>Age</Text></View>
            </View>
            <View style={{flex:0.1,flexDirection:'row',backgroundColor:'white'}}>
                <View style={{flex:0.5,alignItems:'center',top:10}}><Text>Rishabh</Text></View>
                <View style={{flex:0.5,alignItems:'center',top:10}}><Text>23</Text></View>
            </View> 
            <View style={{flex:0.1,flexDirection:'row',backgroundColor:'lightgray'}}>
                <View style={{flex:0.5,alignItems:'center',top:10}}><Text>Tag</Text></View>
                
            </View>  
            <Icon name='add-circle' style={{fontSize: 50, color: 'steelblue', left:250,top:-25}} /> 
            <View style={{padding:10,flex:0.2,flexDirection:'row'}} >
               
               
                <Badge style={{ backgroundColor: 'steelblue' ,marginLeft:20}}>
                <Text style={{ color: 'white' }}>Cooking  <Icon name='close-circle' style={{color:'white',fontSize: 20,marginLeft:10}} /></Text>
                
              </Badge>
              
              <Badge style={{ backgroundColor: 'steelblue', marginLeft:10 }}>
              <Text style={{ color: 'white' }}>Music  <Icon name='close-circle' style={{color:'white',fontSize: 20,marginLeft:10}} /></Text>
            </Badge>
            <Badge style={{ backgroundColor: 'steelblue', marginLeft:10 }}>
              <Text style={{ color: 'white' }}>Weekend  <Icon name='close-circle' style={{color:'white',fontSize: 20,marginLeft:10}} /></Text>
            </Badge>
            </View>
            <View style={{flex:0.1,flexDirection:'row',bottom:40}} >
               
               
                <Badge style={{ backgroundColor: 'steelblue' ,marginLeft:100}}>
                <Text style={{ color: 'white' }}>Cooking  <Icon name='close-circle' style={{color:'white',fontSize: 20,marginLeft:10}} /></Text>
              </Badge>
              
              <Badge style={{ backgroundColor: 'steelblue', marginLeft:10 }}>
              <Text style={{ color: 'white' }}>Music  <Icon name='close-circle' style={{color:'white',fontSize: 20,marginLeft:10}} /></Text>
            </Badge>
            
            </View>
            
        </View>
        
        
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