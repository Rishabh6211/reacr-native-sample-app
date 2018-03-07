export default function(state=[], action) {
    switch(action.type){
        case "GET_DATA" : 
            return {
                ...state,
               userlist : action.payload 
            } 
        break;
        
    }
    return state;
}