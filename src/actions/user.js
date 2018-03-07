import UserData from "../users.json";

export function Get_data(){	
	return dispatch => {
		dispatch({
			type: 'GET_DATA',payload : UserData
		});
    }
	
}

export function save_data(name,age){
	let body = {
		name:name,
		age:age
	}	
	let array = UserData;
	array.push(body)
	console.log(array)
	return dispatch => {
		dispatch({
			type: 'GET_DATA',payload : array
		});
    }
	
}

