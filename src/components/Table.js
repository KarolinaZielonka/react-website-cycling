import React from 'react'

function Table(props) {
    return (
        <>
         <h1 className="raceName">{props.name}</h1>
          <table>
              <tbody>
                <tr>
                  <td>Country</td>
                  <td>{props.country}</td>
                </tr>
                <tr>
                  <td>First race</td>
                  <td>{props.firstRace}</td>
                </tr>
                <tr>
                  <td>Last winner</td>
                  <td>{props.lastWinner}</td>
                </tr>
                <tr>
                  <td>Shirt color</td>
                  <td>{props.shirtColor}</td>
                </tr>
                <tr>
                  <td>Record winner</td>
                  <td>{props.recordWinner}</td>
                </tr>
              </tbody>
            </table>  
        </>
    )
}

export default Table
