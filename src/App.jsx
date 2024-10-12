import React, { useContext } from 'react'
import Header1 from './components/Header1'
import Footer1 from './components/Footer1'
import { DataContext } from './contaxt/UserContext'

const App = () => {

  // contact API is state managment tolls (redux tolls)
  // we can send ower data throught props but can can shard data as centralize data

  const data =useContext(DataContext)
  return (
    <div>
      <h1>this is App.js {data.username}</h1>
      <Header1 />
      <Footer1 />
    </div>
  )
}

export default App