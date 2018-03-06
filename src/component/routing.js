import React,{Component} from 'react';
import {StyleSheet} from  'react-native';
import {Stack,Scene,Router,ActionConst} from 'react-native-router-flux';
import ProfileComponent from './profile';
import DashboardComponent from './dashboard'
import AddComponent from './addperson'
import UserComponent from './newuser'
import ListComponent from './listing'
const Route = () => {

	return(
		<Router 
		navigationBarStyle={styles.navBar} 
		titleStyle={styles.navBarTitle} 
		barButtonTextStyle={styles.barButtonTextStyle} 
		barButtonIconStyle={styles.barButtonIconStyle}
		>
		<Scene key='route' hideNavBar>
			
        <Stack key="register"   >
		<Scene key="profile" component={ProfileComponent}  title="Create a Profile" initial />
          
		</Stack>
		
		<Stack key="dashboard"   >
			<Scene key="dashboard" component={DashboardComponent}  title="Create new Home" />
			<Scene key="add"  component={AddComponent}  title="Add new Person" />
			<Scene key="user"  component={UserComponent}  title="Add new Person" />
			<Scene key="listing"  component={ListComponent}  title="Users" />
        </Stack>
       
		</Scene>

	</Router>
	);
	
}
const styles = StyleSheet.create({
	navBar: {
		backgroundColor:'steelblue',
	},
	navBarTitle:{
		color:'#FFFFFF'
	},
	barButtonTextStyle:{
		color:'#FFFFFF'
	},
	barButtonIconStyle:{
		tintColor:'rgb(255,255,255)'
	}
});
export default Route;