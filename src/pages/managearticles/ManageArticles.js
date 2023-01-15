import { useState } from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../../images/about-bg.jpg';

//components
import Header from '../../components/Header';

//hooks
import { useFetch } from '../../hooks/useFetch';

// styles
import './ManageArticles.css';


export default function ManageArticles(){
    // const url = "https://api.minekraft.ir/posts"
    const url = "http://localhost:3000/articles"
    const {data, isPending, error} = useFetch(url)

    //handle show more articles
    const intialShownPost = 10
    const increaseShownPosts = 10
    const [numberOfPosts, setNumberOfPosts] = useState(intialShownPost)
    const handleOlderBtn = function (){
        setNumberOfPosts(numberOfPosts + increaseShownPosts)
    }
    //

    async function handleDelete(id) {
        return (
            await fetch(url + '/' + id, {method: 'delete'})
                .then(response => response.json())
                .then( window.location.reload(true))
        )
    }
    
 return(
     <div>
         <Header 
            title="Manage Articles"
            subHeader=""
            image={bgImage}
         />
        <main className="about mb-4">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        {error && <p className="error">{error}</p>}
                        {isPending && <p className="loading">Loading...</p> }
                        <table className='table table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Creation Date</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>  
                            <tbody >                     
                                {data && 
                                    data.map( (article, index) => {
                                        while(index < numberOfPosts){
                                            return(
                                                <tr key={article.id}>
                                                    <td className='title'><Link to={`/articles/${article.id}`}>{article.title}</Link></td>
                                                    <td>{article.author}</td>
                                                    <td>{article.creation}</td> 
                                                    <td className='edit'>
                                                        <Link to={`/edit/${article.id}`}>
                                                             <i className="fa-solid fa-pen-to-square"></i>
                                                        </Link>                                                                              
                                                    </td>
                                                     <td className='delete' onClick={() => handleDelete(article.id)}>
                                                        <button>
                                                            <i className="fa-solid fa-trash"></i>
                                                        </button>
                                                    </td>   
                                                </tr>       
                                            );
                                        }
                                        return(null);
                                    })
                                }
                        </tbody>   
                        </table>
                        {data && 
                            <button onClick={handleOlderBtn}
                                className="btn btn-primary text-uppercase older-btn d-flex justify-content-end mt-3 mb-4"
                            >
                                Show more Articles →
                            </button>}    
                    </div>         
                </div>
            </div>
        </main>
     </div>
 )
}