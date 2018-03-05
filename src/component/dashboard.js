import React,{Component} from "react";
import {Actions} from 'react-native-router-flux'
import {StyleSheet,View,Image,TouchableOpacity} from  'react-native';
import { Icon, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import {Avatar} from 'react-native-elements'
import user from '../../user.jpg';
import bgSrc from '../../room.png';
export default class DashboardComponent extends Component {

    constructor(props) {
      super(props);
      
    }
   
    render() {
      
      return (
         
        <View style={styles.container}>
          <View style={styles.container1}>
            <Image style={styles.image}source={bgSrc}>             
            </Image>          
          </View>
          <View style={styles.container2}>
         
          <Icon 
                name='add-circle'
                onPress={() => Actions.add()}
                style={{fontSize: 50, marginLeft:200, bottom: 1, left: 30 }}             
            />
            
          </View>
          <View style={styles.container3}>
          <View style={{flex:.35,flexDirection:'row'}}>
          <Avatar
            large
            rounded
            title="rishabh"
            source={user}
            activeOpacity={0.7}
            
            />
            <Icon 
                name='add-circle'
                onPress={() => Actions.add()}
                style={{fontSize: 80, marginLeft:10, color:"white" }}             
            />
          </View>
            <View style={{flex:0.1,padding:10}}>
            <Text>Rishabh</Text>
            </View>
          </View>
          <View style={{flex:0.2}}>
            <Icon 
                name='checkmark'                
                style={{fontSize: 80,  color:"steelblue",left: 270 }}             
            />
          </View>
         
          
        </View>
        
      );
    }

  }

  const styles = StyleSheet.create({
    container:{
      flex:1
    },
    container1:{
      flex:0.3
    },
    container2:{
        flex:0.1,
        alignItems: 'center',
    },
    container3:{
        padding:10,
        flex:0.5,
        flexDirection:'column'
    },
    image:{
        width:null,
        height:150
    }
  });