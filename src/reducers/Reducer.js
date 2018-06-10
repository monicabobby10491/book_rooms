import * as ActionsTypes from './ActionTypes'

const initialState={
    rooms:1,
    people:1,
    child:0
}

const Reducer = (state=initialState,action)=>{
    const newState=Object.assign({},state);
    switch(action.type){
        case ActionsTypes.ADD_ROOMS:
            if((newState.rooms<5)){
                newState.rooms=newState.rooms+1;
                    if(newState.rooms>newState.people)
                        newState.people=newState.rooms
            }
            else{
                alert("All rooms are taken!")
            }
            break;
        case ActionsTypes.ADD_PEOPLE:
            if(newState.people<20){
                newState.people=newState.people+1
                if(newState.people>(4*parseInt(newState.rooms)))
                    newState.rooms=newState.rooms+1
            }            
            break;
        case ActionsTypes.ADD_CHILDREN:
            if(newState.child<3){
                newState.child=newState.child+1
            }
            break;
        case ActionsTypes.REMOVE_ROOMS:
            if(newState.rooms<6 && newState.rooms>1){
                newState.rooms=newState.rooms-1;
                if(newState.people>(4*parseInt(newState.rooms))){
                    if(newState.child>0)
                        {newState.child=newState.child-1;}
                    else
                        {newState.people=newState.people-1;}
                }
                if(newState.people>(4*parseInt(newState.rooms))){
                    var extraPeople=newState.people-4*parseInt(newState.rooms)
                    newState.rooms=newState.rooms-extraPeople
                }
            }
            break;
        case ActionsTypes.REMOVE_PEOPLE:
            if(newState.people<5 && newState.people>1){
                newState.people=newState.people-1
            }
        case ActionsTypes.REMOVE_CHILDREN:
            if(newState.child<4 && newState.child>0){
                newState.child=newState.child-1
            }
            break;
        default: return state;
    }
    return newState
}

export default Reducer;