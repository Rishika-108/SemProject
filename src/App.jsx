import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import MovieList from './Pages/MovieList'
import MovieDetails from './Pages/MovieDetails'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const App = () => {
  return (
     <>
      <div className="min-h-screen flex flex-col">
       <Navbar/>
         <main className="flex-grow">
      <Routes >
         
         <Route path='/'element= { <Home/>} />
          <Route path = '/movies' element= { <MovieList/>}/>
          <Route path = '/movies/:id' element= { <MovieDetails/>}/>
          
      </Routes>
      </main>
       <Footer/>
       </div>
     </>
  )
}

export default App
