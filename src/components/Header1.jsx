import React, { useContext } from 'react'
import { DataContext } from '../contaxt/UserContext'

const Header1 = () => {

    const usercontext = useContext(DataContext)

  return (
    <div>
        <h1>Header {usercontext.age}</h1>
    </div>
  )
}

export default Header1