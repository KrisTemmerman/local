// a  reducer takes 2 things

// 1. THE ACTION
// 2. COPY OF CURRENT STATE

 function posts(state = [], action){
    switch(action.type) {
        case 'INCREMENT_LIKES' :
            console.log('INCREMENT LIKE ')
            const i = action.index;
            return [
                ...state.slice(0,i), //before the one we are updating
                {...state[i],likes: state[i].likes+1},
                ...state.slice(i+1) //after
            ]
        default:
        return state;
    }
    
}
export default posts