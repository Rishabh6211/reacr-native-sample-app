import React,{Component} from "react";
import {StyleSheet,View,Image,TouchableOpacity} from  'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import bgSrc from '../../room.jpg';
export default class DashboardComponent extends Component {

    constructor(props) {
      super(props);
      
    }
   
    render() {
      
      return (
         
        <View style={styles.container}>
        <Container>
        
        <Content>
          <Card>
            
            <CardItem cardBody>
              <Image source={bgSrc} style={{height: 150, width: null, flex: 1}}/>
            </CardItem>
            
    
            <TouchableOpacity style={styles.item}>
                <Text style={styles.text}>                  
                {"\t\t\t\t\t\t\t"} Craete a Home {"\n"} <Text>i have room for new person</Text>                
                </Text>               
            </TouchableOpacity>
              
             
            
          </Card>
        </Content>
      </Container>
        </View>
        
      );
    }

  }

  const styles = StyleSheet.create({
   container:{
       padding:10,
       flex:0.5
   },
   
    text:{
        //padding:10,       
        color:"white",
        height:50,
        fontSize: 15,
        fontWeight: 'bold',      
        
    },
    item:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"steelblue",
    }
  });