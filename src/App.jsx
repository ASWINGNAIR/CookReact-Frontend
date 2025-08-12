import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import AboutPage from './Pages/AboutPage'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>

      <Header />

      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/about' element={<AboutPage/>} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
