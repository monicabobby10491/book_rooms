import React, {Component} from 'react';
import './css/Options.css';
import AppActions from '../reducers/Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Add from 'react-icons/lib/fa/plus-circle';
import Minus from 'react-icons/lib/fa/minus-circle';
import Person from 'react-icons/lib/fa/user';

class People extends Component{
    constructor(props) {
        super(props);          
        this.state = {
           person:1
        }
        this.addPerson=this.addPerson.bind(this)
        this.removePerson=this.removePerson.bind(this)
    }
    addPerson(){
        this.props.action.changeValue("ADD","PEOPLE")
    }
    removePerson(){
        this.props.action.changeValue("REMOVE","PEOPLE")
    }
    render(){
        return(
            <div style={this.style}>
                <h4> <Person color='blue'/> People </h4>
                <span><Add color='red' onClick={this.addPerson}/></span>
                <span>{this.props.person}</span>
                <span><Minus color='red' onClick={this.removePerson}/></span>
            </div>
        );
    }
}

const mapStatetoProps=(state)=>{
    return{        
        person:state.ReducerContent.people
    }
}
const mapDispatchToProps= (dispatch) => {
    return{
        action:bindActionCreators(AppActions,dispatch)
    }
}

export default connect(mapStatetoProps,mapDispatchToProps) (People);