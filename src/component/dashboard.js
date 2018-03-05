import React,{Component} from "react";
import {Actions} from 'react-native-router-flux'
import {StyleSheet,View,Image,TouchableOpacity} from  'react-native';
import { Icon, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';

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
                
                style={{fontSize: 50, marginLeft:200, bottom: 20, left: 30 }}             
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
    image:{
        width:null,
        height:150
    }
  });