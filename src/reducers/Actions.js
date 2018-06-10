import * as ActionTypes from './ActionTypes';

const AppActions=()=>({
    changeValue:(action, object)=>{
        
        return {
            type:action+"_"+object
        }
    }
})

export default AppActions();