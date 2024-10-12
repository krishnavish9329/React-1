import React , { useContext }from 'react'
import { DataContext } from '../contaxt/UserContext'

const Footer1 = () => {
    const data =useContext(DataContext)
  return (
    <div>
        <h1>Footer {data.city}</h1>
    </div>
  )
}

export default Footer1