import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import AboutPage from './Pages/AboutPage'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ContactPage from './Pages/ContactPage'
import RecipePage from './Pages/RecipePage'

function App() {

  return (
    <>

      <Header />

      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/recipe' element={<RecipePage/>} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
