import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Article from './components/Article'
import EditPage from './components/EditPage'

// pages
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import ArticlesPage from './pages/articlesPage/ArticlesPage'
import NewArticle from './pages/newarticle/NewArticle'
import ManageArticles from './pages/managearticles/ManageArticles'
  
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
        <Route path="/articles-page" element={<ArticlesPage />} />
        <Route path='/articles/:id' element={<Article/>}/>  
        <Route path="/new-article" element={<NewArticle />} /> 
        <Route path="/manage-articles" element={<ManageArticles />} /> 
        <Route path='/edit/:id' element={<EditPage/>}/>  
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    
    </div>
  );
}

export default App