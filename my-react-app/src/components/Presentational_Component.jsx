import React from 'react'

function Presentational_Component({ name, age }) {
  return (
    <>
        <div>Presentational_Components</div>
        <h3>{name} - {age} years old</h3>
    </>
  )
}

export default Presentational_Component