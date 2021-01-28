//reduceris what the data layer initally looks like
//state
//dispatching things into reducer,dispatching actions,reducer listen reduxdakinin aynısı
//its like a global state or global store ve Loginde kullan
export const initalState={
  user:null,  
};
//actions

export const actionTypes = {
    SET_USER:"SET_USER",
};
//we are listening and if you just received set user action
//then what will do is return
const reducer =(state,action) => {
    console.log(action);
    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state, // whatever it currently looks like 
                //but change the user to whatever we pass it
                user:action.user,
            };
            default:
                return state;
    }
}
export default reducer;