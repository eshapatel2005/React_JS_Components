import React,{useState} from 'react'

function Controlled_Components () {
    const [username, setUsername] = useState(""); 
    return (
        <>
            <div>Controlled Component </div><br></br>
            <input style={{border: '1px solid black'}} value={username} onChange={(e) => setUsername(e.target.value)} /> 
            <p style={{color:"red"}}>{username}</p>
        </>

    )
}

export default Controlled_Components 