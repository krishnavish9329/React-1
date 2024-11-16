# React + Vite


what is React and  why React(introduction)?


React class and function component?


good understanding of import export?

Real Dom Vs virtual Dom?

what is jSX extention?

what is hooks?

what is useState hooks?
->
Hooks are JavaScript functions in React that allow developers to access React features from within function components:
State hooks: Allow components to remember information, such as user input
Context hooks: Allow components to receive information from distant parents without passing it as props
Ref hooks: Allow components to hold information that isn't used for rendering

colling Function in react?


Add css ( normal css and tailwindcss)?
->
go to official webside of tailwindcss click start and select vite and intall all dependencies.


form handling in react


two way binding?


fragment?
->
A fragment in React is a feature that allows developers to group multiple elements from a component without adding extra nodes to the DOM: 
What it does: Groups a list of children without adding extra nodes to the DOM 
Why it's useful: Helps keep the DOM structure cleaner and more organized 
How to use it: Use the Fragment component, use <></> for short, or pass the key prop to Fragment 

{
  <>
  </>
}



components?


What is prop and prop dialing ?
->
->
prop dialing witch maen we can pass ower data or veriable  to component to component


what is APIs?

what is axios?

what is useEddect?

React Toastify(for flash messages)



routing(React routing Dom)




context API?




Node :-
1) we canver return 2 element normaly.
2) we user ower veriable under {} .
3) <React.StrictMode></React.StrictMode> is a mode where any console method excutud at 2 time 



//
ower code 
const App = () => {
  const name="Krishna";
  const age=12;
  return (
    <div>
      <h1>hello1 {name}</h1>
      <h1>your age is {age}</h1>
    </div>
  )
}
-------------------------------------------------------
//chnage the value of variabl at normal method in react


const App = () => {
  let user="krishna"
  let Abc= ()=>{
    console.log("hello");
  }
  let chnageUser =()=>{
    if(user == "krishna" )
    {
      console.log(user)
      user="sangam"
      console.log(user)
    }
  }

  return (
    <div>
      <button onClick={Abc}>console</button>
      <h1>username {user}</h1>
      <button onClick={chnageUser}>chageName</button>
    </div>
  )
}
output :--
krishna
sangam
{we can change user name at console but not change in frontEnd}
----------------------------------------------------
//chnage the value of veriable in react


const App = () => {
  const [num, setnum] = useState(10);

  const changeNum= ()=>{
    console.log(`chnage the value of ${num}`)
    if(num==10)
    setnum(20)
    else
    setnum(10)
    //we can chnage ower veriable using some method

  }

  return (
    <div>
      <h1>value od {num}</h1>
      <button onClick={changeNum}>chnageNum</button>
    </div>
  )
}
------------------------------------------

//make a Increment and decrement variabl in react

const App = () => {
  const [num, setnum] = useState(0);

  const Increment= ()=>{
    console.log(`number ${num}`)
    setnum(num+1)
  }

  return (
    <div>
      <h1>Number is {num}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={()=>{setnum(num-1)}}>decrement</button>
    </div>
  )
}
output:-
Increment and decrement value of num

------------------------------------------------

// add css normal and  tailwindcss

const App = () => {
  return (
    <div>
      <h2 className='text-5xl bg-pink-700 text-black'>hello guys</h2>
    </div>
  )
}
add tailwindcss in App
---------------------------------------------------

//form handling in react

const App = () => {
  const submitHandler=(e)=>{
    e.preventDefault(); // solution of relode form
    console.log("hello")
    console.log(e)
  }
  //ower form is relode so console.log is run but for some time Because form is relode 
  // how to solve the issue using chnage the default propety of form
  return (
    <div>
     <form onSubmit={(e)=>{
        submitHandler(e)
      }} > 
      <input className='px-4 rounded py-3 text-xl m-5' type="text" placeholder='Enter the name'/>
      <button className='px-4 py-3 m-5 text-xl font-semibold bg-emerald-600 rounded'>submir</button>
     </form>
    </div>
  )
}
output:--console
{read all console.log Because form is not relode}
----------------------------------------------------------

//two way binding



const App = () => {
  const [username, setusername] = useState('')
  const submitHandler=(e)=>{
    e.preventDefault(); 
    console.log(username)
    setusername('')
  }
  return (
    <div>
     <form 
      onSubmit={(e)=>{
        submitHandler(e)
      }} > 
      <input 
      value={username}
      onChange={(e)=>{
        setusername(e.target.value)
      }}
      className='px-4 rounded py-3 text-xl m-5' 
      type="text" 
      placeholder='Enter the name'
      />

      <button className='px-4 py-3 m-5 text-xl font-semibold bg-emerald-600 rounded'>submir</button>
     </form>
    </div>
  )
}

-----------------------------------------------------------------

//fragment {read above}

const App = () => {
  return (
    <>
    <h4 className='text-xl'>Hello i am krishna</h4>
    <p>i am krishna kumar vishwakarma i am learn react JS</p>
    </>
  )
}
output:-
Hello i am krishna
i am krishna kumar vishwakarma i am learn react JS
----------------------------------------------------------------------

//components

{Header.jsx}

import React from 'react'

const Header = () => {
  return (
    <>
    <nav className='bg-emerald-950  flex py-5 px-10 item-center justify-between'>
      <h2 className='text-2xl'>krishna</h2>
      <div className='flex gap-8 item-center'>

      <h4 className='text-xl'>About</h4>
      <h4 className='text-xl'>Contact</h4>
      <h4 className='text-xl'>services</h4>
      <h4 className='text-xl'>Your Account</h4>
      </ div>
    </nav>
    
    </>
  )
}

export default Header

{Footer.jsx}

import React from 'react'
import Header from './Header'
const Footer = () => {
  return (
    <>
    <Header />
    <div className='bg-pink-400 w-full flex item-center justify-center py-6 absolute bottom-0'>This is Footer Component</div>
    </>
  )
}

{App.jsx}
export default Footer

const App = () => {
  return (
    <>
    {/* <Header /> */}
    <Footer />
    </>
  )
}

-------------------------------------------------------------------
// components with prop

First-------------
{Card.jsx}

import React from 'react'

export const Card = (props) => {
    // console.log(props)
  return (
    <div>
        <h1 className='text-3xl'>UserName is {props.user} </h1>
    </div>
  )
}

{App.jsx}

const App = () => {
  const user ='krishna'
  return (
    <div>
      <Card  user={user} />
      <Card  user="Sangam" /> {/* we can send this way also */}
    </div>
  )
}

output:-
UserName is krishna
UserName is Sangam
-------------------------------------------------------------------
seconde-----------------

{Card.jsx}

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

{App.jsx}

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

----------------------------------------------------------------------------

// APIs With axios (backEnd Toll) and fack Api of lorem picsum


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

-----------------------------------------------------------------------

// React Routing Dom 


{Header.jsx}

import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <>
    <nav className='bg-emerald-600  flex py-7 px-10 item-center text-wjite justify-between'>
      <h2 className='text-2xl'>krishna <input className='text-black' type="text" /></h2>
      <div className='flex gap-8 item-center'>
        {/* <a className='text-xl' href="/">Home</a>
        <a className='text-xl' href="/about">About</a>
        <a className='text-xl' href="/contact">Contact</a>
        <a className='text-xl' href="/product">Product</a> */}
        
        <Link to='/' >Home</Link>
        <Link to='/about' >About</Link>
        <Link to='/contact' >Contact</Link>
        <Link to='/product' >Product</Link>

      </ div>
    </nav>
    
    </>
  )
}

export default Header




{App.jsx}

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Header from './components/Header'

const App = () => {
  return (
    <div>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
          
      </Routes>
    </div>
  )
}

export default App


----------------------------------------------------------------

// 


{ UserContext.jsx }

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

{Header1.jsx}

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


{Footer1.jsx}
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

{App.jsx}


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

output:--
this is App.js krishna
Header 21
Footer jbp

___________________________________________________________________________
End this chepter of react


