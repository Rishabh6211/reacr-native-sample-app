import React,{Component} from "react";
import {Actions} from 'react-native-router-flux'
import {FlatList,StyleSheet,View,Image,TouchableOpacity,TouchableHighlight} from  'react-native';
import { Icon, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right,List,ListItem } from 'native-base';
import {Avatar} from 'react-native-elements'
import { connect } from 'react-redux';
import user from '../../user.jpg';
import bgSrc from '../../room.png';
import {Get_data} from '../actions/user'
class DashboardComponent extends Component {

    constructor(props) {
      super(props);
      this.state = {
        users: []
      };     
      this.props.getData();
    }
   
    render() {
      console.log("user",this.props.users.userlist)
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
          <View style={{flex:.6,flexDirection:'row'}}>
          {
            this.props.users.userlist?
            <FlatList
            numColumns={4}
            scrollEnabled={false}
            data={this.props.users.userlist}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
                console.log('in the list ',item)
                return (
                    //<Text> {item.name}</Text>
                    <Avatar large rounded  onPress= {()=> Actions.add()} key ={item.id} source={{uri : item.picture}}/>
                    
                )
            }}
        />
          : null
          }
          </View>
            
          </View>
          <View style={{flex:0.1}}>
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
      flex:.2
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

  const mapStateToProps = (state) =>{
    return {users:state.users? state.users : null }
  }

export default connect(mapStateToProps , {getData:Get_data})(DashboardComponent)