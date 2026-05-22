import React, { useRef }  from 'react'

function Uncontrolled_Components() {
    const nameRef = useRef(); 
      const submitForm = () => {
    alert(nameRef.current.value);
  }

  return (
    <>
        <div>Uncontrolled_Components</div>
        <input style={{border: '1px solid black'}} ref={nameRef} /><br></br>
        <button style={{border: '1px solid black',padding: '10px'}} onClick={submitForm}>Submit</button>
    </>
  )
}

export default Uncontrolled_Components