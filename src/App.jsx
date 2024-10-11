import React from 'react'
import { Card } from './components/Card'

const App = () => {
  const user = [
    {
      "Name": "John Doe",
      "Age": 28,
      "City": "New York",
      "Profession": "Software Engineer",
      "ImageURL": "https://example.com/images/john_doe.jpg"
    },
    {
      "Name": "Jane Smith",
      "Age": 34,
      "City": "San Francisco",
      "Profession": "Data Scientist",
      "ImageURL": "https://example.com/images/jane_smith.jpg"
    },
    {
      "Name": "Michael Johnson",
      "Age": 45,
      "City": "Los Angeles",
      "Profession": "Graphic Designer",
      "ImageURL": "https://example.com/images/michael_johnson.jpg"
    },
    {
      "Name": "Emily Davis",
      "Age": 30,
      "City": "Chicago",
      "Profession": "Marketing Manager",
      "ImageURL": "https://example.com/images/emily_davis.jpg"
    },
    {
      "Name": "David Wilson",
      "Age": 40,
      "City": "Houston",
      "Profession": "Product Manager",
      "ImageURL": "https://example.com/images/david_wilson.jpg"
    }
  ]

  user.forEach(()=>{
    console.log("jj")
  })
  


  
  return (
    <div>
      <div className='p-10'>
      {/* <Card user="sangam" age='69' city="Bhopal" /> */}
      {
        user.map(function(elem,index){
          return <Card Key={index} Name={elem.Name} Age={elem.Age} url={elem.ImageURL} City={elem.City} />
        })
      }


      </div>
    </div>
  )
}

export default App