import UserData from "../users.json";

export function Get_data(){	
	return dispatch => {
		dispatch({
			type: 'GET_DATA',payload : UserData
		});
    }
	
}

export function save_data(name,age,uri){
	let body = {
		name:name,
		age:age,
		picture:uri
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

