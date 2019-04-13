import React from 'react'

export default function Form(props) {
    return (
      <form onSubmit={e => props.onSubmit(e) }>
        <input 
          type="text" 
          placeholder="Github username"
          value={props.input} 
          onChange={event => props.changeInput(event.target.value)}
          required
        />
        <button>Add Card</button>
      </form>
    )
}
