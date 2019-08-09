import React,{Component} from 'react'
import module from './Contact.module.css'

import Form from './Form/Form';

class Contact extends Component{
    state={
        email:'',
        name:'',
        message:''
    }
    
    handleChange=(evt)=>{
        this.setState({[evt.target.name]:evt.target.value});
    }

    render(){

    
    return (
        <div className={module.Contact}>
            <Form {...this.state} change={this.handleChange}/>
        </div>
    )}
}

export default Contact;