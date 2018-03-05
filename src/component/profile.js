import React,{Component} from "react";
import {StyleSheet,View,Image,Text} from  'react-native';
import SplashScreen from 'react-native-splash-screen'
import HomeComponent from './home'
import SearchComponent from './search'
export default class ProfileComponent extends Component {

    constructor(props) {
      super(props);
      
    }
   
    componentDidMount() {
        SplashScreen.hide();
    }
    render() {
      
      return (
         
        <View style={styles.container}>
        <View style={styles.container1}>
        </View>
           <HomeComponent />
           
           <SearchComponent/>
           <View style={styles.container2}>
            <Text>
              Skip & Search
            </Text>
          </View>
        </View>
        
        
      );
    }

  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
    },
    container1: {
      padding:10
      
    },
    container2: {
      flex:0.1,
      justifyContent: 'center',
      alignItems: 'center',      
    },
    text:{
      color:"white",
      fontSize:30
    }
    
    
    
  });