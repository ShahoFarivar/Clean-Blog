import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Article from './components/Article'

// pages
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import SamplePost from './pages/samplePost/SamplePost'
  
// styles
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/about" element={<About />} />   
        <Route path="/contact" element={<Contact />} />   
        <Route path="/sample-post" element={<SamplePost />} />
        <Route path='/articles/:id' element={<Article/>}/>  
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    
    </div>
  );
}

export default App