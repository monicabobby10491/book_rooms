import {createStore, applyMiddleware, compose} from 'redux';
import RootReducer from './RootReducer';

function configStore(initialState){
    const store =createStore(RootReducer,
        {}
    );
    return store;
}

export default configStore;