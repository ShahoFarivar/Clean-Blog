import { useFetch } from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import bgImage from '../images/post-bg.jpg'

//components
import Header from './Header'

//styles
import './Article.css'

export default function Article(){
    const {id} = useParams()
    // const url = "https://api.minekraft.ir/posts/" + id
    const url = "http://localhost:3000/articles/" + id

    const {data:article, isPending, error} = useFetch(url)

    return(
        <div>
            <Header image={bgImage} />
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p> }
            {article && 
                <div className='article'>
                    <h1 className='article-header'>{article.title}</h1>
                    <h2 className='article-subheader'>{article.subHeader}</h2>
                    <p className='article-meta'>Posted by <a href="#">{article.author}</a> on {article.creation}</p>
                    <p className='content'>{article.content}</p>
                </div>
            }
        </div>  
    )
}