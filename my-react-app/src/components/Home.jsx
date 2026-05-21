import React from 'react'
import styled from "styled-components";


function Home({ color }) {
  // Inline style
  const txt5 = {
    color:"green",
    fontSize:"30px",
    fontWeight:"bold",
    textAlign:"center",
    marginTop:"20px"
  };

  // Styled component
  const Box = styled.div`
    background: pink;
    padding: 20px;
    border-radius: 10px;
    color: black;
    textAlign:center;
  `;

  return (
    <>
      <div className='txt1'>Hello Everyone !!!!!</div>
      <div style={txt5}>Esha Patel S.</div>
      <table className='tbl1' border="1">
        <tr>
          <th>Name </th>
          <th> Age</th>
          <th>City</th>
        </tr>

        <tr>
          <td>Esha Patel</td>
          <td>21</td>
          <td>Surat</td>
        </tr>

        <tr>
          <td>Avi Patel</td>
          <td>15</td>
          <td>Mumbai</td>
        </tr>
      </table>
      <Box>
        Hello!!!
      </Box>
    </>
    
  )
}

export default Home