import React,{useState,useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';

import UserGrid from './components/users/UserGrid';
//import Search from './components/ui/Search';
//import Header from './components/ui/Header'

const App = ()=>{

   const [items,setItems]=useState([])
   const [isLoading,setIsLoading]=useState(true)
   const [query,setQuery]=useState('')
     //useEffect(() => {
        const fetchItems=async () => {
          const result=await axios(`https://reqres.in/api/users?page=1=${query}`)
          console.log(result.data)
          setItems(result.data)
          setIsLoading(false)  
        }

        //fetchItems()
     //},[query])
  return (
  <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">ZIPPY</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
           <button className="btn btn-outline-success my-2 my-sm-0" onClick={fetchItems}>Get Users</button>
            </li>
          </ul>
        </div>
      </nav>
       
       
        <UserGrid isLoading={isLoading} items={items} />

  </div>
  )
}



export default App;
