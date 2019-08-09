import React from 'react'

function Form(props) {
    return (
        <form>
            <div>
                <label htmlFor='email'>Email: </label>
                <input 
                id='email' 
                name='email' 
                onChange={props.change} 
                value={props.email} />
            </div>
            <div>
                <label htmlFor='name'>name: </label>
                <input 
                id='name' 
                name='name' 
                onChange={props.change} 
                value={props.name} />
            </div>
            <div>
                <label htmlFor='message'>message: </label>
                <textarea
                id='message' 
                name='message' 
                onChange={props.change} 
                value={props.message} ></textarea>
            </div>
        </form>
    )
}

export default Form
