import React, { createContext } from 'react'

export const DataContext = createContext()

const UserContext = (props) => {

    console.log(props.children)

    const userdata ={
        username:"krishna",
        age:21,
        city:"jbp"
    }
  return (
    <div>
        <DataContext.Provider value={userdata}>

            {props.children}

        </DataContext.Provider>
    </div>
  )
}

export default UserContext