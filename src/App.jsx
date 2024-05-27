import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Card from './components/Card/Card'
import Trending from './components/Trending/Trending'
import Learning from './components/Learning/Learning'
import Companies from './components/Companies/Companies'
import Footer from './components/Footer/Footer'
import './App.css'


const App = () => {
  return (
    <>
        <Navbar/>
        <div className='app'>
        <Hero/>
        <Card/>
        <Companies/>
        <Learning/>
        </div>
        <Trending/>
        <Footer/>
    </>
  )
}

export default App