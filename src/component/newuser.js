import React,{Component} from "react";
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux';
import {AsyncStorage,StyleSheet,View,Image,TouchableOpacity,PixelRatio,TextInput} from  'react-native';
import { Badge,Icon, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import {Avatar,SearchBar} from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ImagePicker from "react-native-image-picker";
import user from '../../user.png';
import bgSrc from '../../room.png';
import {save_data} from '../actions/user'
const imagePickerOptions = {
  title: "Select Avatar",
  customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

class UserComponent extends Component {


  state = {
    avatarSource: null,
    name: '',
    age: '',
    uri:''
  };
  componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))

  setName = (value) => {
    AsyncStorage.setItem('name', value);
    this.setState({ 'name': value });
  }
  handleUser = (text) => {
    this.setState({ name: text })
  }
  handleAge = (number) => {
    this.setState({ age: number })
  }
  add = (name, age, uri) => {
    console.log("name",name,"uri",uri)
    this.props.save_data(name,age,uri)
    Actions.dashboard()
  }

  componentWillReceiveProps(Props){
    // if(this.props.user.userlist){
    //   alert("added successfully")
    //   Actions.dashboard()
    // }
    // else{
    //   alert("invalid user")
    // }
  }
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
      
      
    }
   
    render() {
      
      return (
       <KeyboardAwareScrollView style={styles.container}>
        <View >
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
               
                <View style={{flex:0.5,alignItems:'center',top:10}}>  
                <TextInput placeholder="Enter Name"  onChangeText = {this.setName}
                style={styles.input}/> 
               
                </View>
                <View style={{flex:0.5,alignItems:'center',top:10}}>
                <TextInput placeholder="Age"  onChangeText = {this.handleAge}
                style={styles.input1}/> 
                </View>
            </View> 
            <View style={{padding:10,flex:0.1,flexDirection:'row',backgroundColor:'lightgray'}}>
                <View style={{padding:10,flex:0.5,alignItems:'center',top:10}}><Text>Tag</Text></View>
                
            </View>  
            <Icon name='add-circle' style={{fontSize: 50, color: 'steelblue', left:250,top:-25}} /> 
            <View style={{padding:10,flex:0.2}}>
            
            </View>
            <View style={{padding:10,flex:0.1}}> 
              <TouchableOpacity style={{backgroundColor:"steelblue"}} onPress = {
                () => this.add(this.state.name, this.state.age,this.state.avatarSource)
             }>
                  <Text  style={{height:40,color:"white",top:10,marginLeft:150,fontWeight:'bold'}}>Add</Text>
              </TouchableOpacity>
            </View>
            <Text>{this.state.name}</Text>
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
    },
    input: {
      
      width:100,
      //height: 40,
     // marginHorizontal: 20,
      //marginBottom :10,
      color: 'black',
    },
    input1:{
      width:35,
      color:'black'
    },
    inputWrapper: {
      flex: 1,
    }
  });
  export default connect (null, {save_data:save_data})(UserComponent)