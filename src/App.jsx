import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [data, setdata] = useState([])

  const GetData= async()=>{
    const response = await axios.get('https://picsum.photos/v2/list')
    
    setdata(response.data)
    
    console.log(data)

  }
  // GetData() // this function is working but not efficiant way

  useEffect(() => {
    GetData()
  }, [])
  
  return (
    <div className='p-10'>
      {/* <button onClick={GetData} className='bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90'>get Data</button> // * if we want to call GetData function with button */ }
      <div className='p-5 mt-5 bg-gray-950'>
        {
          data.map(function(elem,idx){
            return (
            <div key={idx} className='bg-gray-50 text-black flex itrm-center justify-between w-full px-7 py-6 rounded mb-3'>
              <img className='h-40' src={elem.download_url} alt="" />
              <h1>{elem.author}</h1>
            </div>)
          })
        }
      </div>
    </div>
  )
}

export default App