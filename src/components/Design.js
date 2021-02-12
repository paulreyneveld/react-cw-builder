import React from 'react'

const Design = () => {

    const grid = Array.apply(null, Array(225))

    const renderTableData = () => {
        return grid.map((item, index) => {
            if (index % 15 === 0) {
                return <tr></tr>
            }
            else {
                return <td>{index}</td>
            }
            
                
        })
    }

    return (
        <>
        <h1>yup</h1>
        <table>
        <tbody>
        {renderTableData()}
        </tbody>
        </table>
        </>

        )
}

export default Design