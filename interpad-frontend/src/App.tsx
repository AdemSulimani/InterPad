import './App.css'
import Header from './components/Header'
import Home from './pages/landing-page/Home'
import Stats from './pages/landing-page/Stats'
import About from './pages/landing-page/About'
import Features from './pages/landing-page/Features'
import Customize from './pages/landing-page/Customize'
import Contribute from './pages/landing-page/Contribute'
import Links from './pages/landing-page/Links'
import Contact from './pages/landing-page/Contact'
import Thanks from './pages/landing-page/Thanks'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Home />
      <Stats />
      <About />
      <Features />
      <Customize />
      <Contribute />
      <Links />
      <Contact />
      <Thanks />
      <Footer />
    </>
  )
}

export default App
