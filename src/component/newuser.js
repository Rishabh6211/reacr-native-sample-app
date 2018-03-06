import React,{Component} from "react";
import {Actions} from 'react-native-router-flux'
import {StyleSheet,View,Image,TouchableOpacity,PixelRatio} from  'react-native';
import { Badge,Icon, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import {Avatar,SearchBar} from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ImagePicker from "react-native-image-picker";
import user from '../../user.png';
import bgSrc from '../../room.png';

const imagePickerOptions = {
  title: "Select Avatar",
  customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

export default class UserComponent extends Component {


  state = {
    avatarSource: null
  };
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(imagePickerOptions, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  }
    constructor(props) {
      super(props);
      alert(JSON.stringify(ImagePicker));
      
    }
   
    render() {
      
      return (
       
        <View style={styles.container}>
        <View style={{padding:10,flex:0.4,alignItems:'center',top:20}}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
          { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
            <Image style={styles.avatar} source={this.state.avatarSource} />
          }
          </View>
        </TouchableOpacity>
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
    },
    avatarContainer: {
      borderColor: '#9B9B9B',
      borderWidth: 1 / PixelRatio.get(),
      justifyContent: 'center',
      alignItems: 'center'
    },
    avatar: {
      borderRadius: 75,
      width: 150,
      height: 150
    }
  });