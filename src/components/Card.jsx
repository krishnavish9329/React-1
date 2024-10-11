import React from 'react'

export const Card = (props) => {
    
    console.log(props)
  return (
    <div className='mr-6 bg-white text-black inline-block p-6 text-center rounded'>
        <img className=" ml-8 h-32 w-32 rounded-full mb-3" src={props.url} alt="" />
        <h1 className='text-2xl font-semibold md-4'>{props.Name}</h1>
        <h1> {props.Age}, {props.City} </h1>
        <button className='mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Add Friend</button>

    </div>
  )
}
