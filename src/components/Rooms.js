import React, {Component} from 'react';
import './css/Options.css';
import AppActions from '../reducers/Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Add from 'react-icons/lib/fa/plus-circle';
import Minus from 'react-icons/lib/fa/minus-circle';

class Rooms extends Component{
    constructor(props) {
        super(props);          
        this.state = {
           rooms:1
        }
        this.addRoom=this.addRoom.bind(this)
        this.removeRooms=this.removeRooms.bind(this)
    }
    addRoom(){
        this.props.action.changeValue("ADD","ROOMS")
    }
    removeRooms(){
        this.props.action.changeValue("REMOVE","ROOMS")
    }
    render(){
        return(
            <div className="options">
                <h4> Rooms </h4>
                <span> <Add color='red' onClick={this.addRoom}/> </span>
                <span>{this.props.rooms}</span>
                <span> <Minus color='red' onClick={this.removeRooms}/></span>
            </div>
        );
    }
}

const mapStatetoProps=(state)=>{
    return{        
        rooms:state.ReducerContent.rooms
    }
}
const mapDispatchToProps= (dispatch) => {
    return{
        action:bindActionCreators(AppActions,dispatch)
    }
}

export default connect(mapStatetoProps,mapDispatchToProps) (Rooms);