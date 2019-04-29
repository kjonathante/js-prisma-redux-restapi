import React, { useState } from 'react';

const AddMessage = (props) => {
  const [input, setInput] = useState("")

  return (
    <div>
      <input 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => {
        setInput("")
        props.createMessage(input)
      }}>Create</button>

    </div>
  )
}

export default AddMessage