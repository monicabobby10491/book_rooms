import React, {Component} from 'react';
import './css/Options.css'
import AppActions from '../reducers/Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Add from 'react-icons/lib/fa/plus-circle';
import Minus from 'react-icons/lib/fa/minus-circle';

class Children extends Component{
    constructor(props) {
        super(props);          
        this.state = {
           child:0
        }
        this.addChild=this.addChild.bind(this)
        this.removeChild=this.removeChild.bind(this)
    }
    addChild(){
        this.props.action.changeValue("ADD","CHILDREN")
    }
    removeChild(){
        this.props.action.changeValue("REMOVE","CHILDREN")
    }
    render(){
        return(
            <div style={this.style}>
                <h4> Children </h4>
                <span><Add color='red' onClick={this.addChild}/></span>
                <span>{this.props.child}</span>
                <span><Minus color='red'  onClick={this.removeChild}/></span>
            </div>
        );
    }
}
const mapStatetoProps=(state)=>{
    return{        
        child:state.ReducerContent.child
    }
}
const mapDispatchToProps= (dispatch) => {
    return{
        action:bindActionCreators(AppActions,dispatch)
    }
}

export default connect(mapStatetoProps,mapDispatchToProps) (Children);