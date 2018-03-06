import UserData from "../users.json";

export function Get_data(){	
	return dispatch => {
		dispatch({
			type: 'GET_DATA',payload : UserData
		});
    }
	
}