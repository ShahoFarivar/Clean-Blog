import './Articles.css'

import Card from './Card';
import { useFetch } from './../hooks/useFetch';
import { useState } from 'react';


export default function Articles(){
    // const url = "https://api.minekraft.ir/posts"
    const url = "http://localhost:3000/articles"
    const {data, isPending, error} = useFetch(url)
    const intialShownPost = 4
    const increaseShownPosts = 5
    const [numberOfPosts, setNumberOfPosts] = useState(intialShownPost)
    
    const handleOlderBtn = function (){
        setNumberOfPosts(numberOfPosts + increaseShownPosts)
    }

    return(
            <div className='articles'>
                {error && <p className="error">{error}</p>}
                {isPending && <p className="loading">Loading...</p> }
                {data && 
                    data.map( (article, index) =>{
                        while(index < numberOfPosts){
                            return(
                                <Card 
                                    key={article.id}
                                    article={article}
                                />               
                        );
                        }
                        return(null)
                    })
                }
                {data && <button onClick={handleOlderBtn}
                className="btn btn-primary text-uppercase older-btn d-flex justify-content-end mt-3 mb-4">Older Posts →</button>}  
                
            </div>  
    );
}