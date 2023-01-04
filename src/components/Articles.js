import './Articles.css'

import Card from './Card';
import { useFetch } from './../hooks/useFetch';


export default function Articles(){
    const url = "http://localhost:3000/articles"
    const {data, isPending, error} = useFetch(url)

    return(
            <div className='articles'>
                {error && <p className="error">{error}</p>}
                {isPending && <p className="loading">Loading...</p> }
                {data && 
                    data.map( (article) =>{
                        return(
                                <Card 
                                    key={article.id}
                                    article={article}
                                />               
                        );
                    })
                }
                {data && <a className="btn btn-primary text-uppercase older-btn d-flex justify-content-end mb-4" href="#!">Older Posts →</a>}  
                
            </div>  
    );
}