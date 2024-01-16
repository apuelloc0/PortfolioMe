import './App.css'
import Contact from './components/Contact'
import About from './components/About'
import Certificates from './components/Certificates'
import Header from './components/Header'
import Work from './components/Work'
import Profile from './components/Profile'
import { BrowserRouter } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
      <>
        <div>
          <Header />
          <Profile />
          <About />
          <Work />
          <Certificates />
          <Contact />
        </div>
      </>
    </BrowserRouter>
  )
}

export default App
