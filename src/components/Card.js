import { Link } from 'react-router-dom';
import './Card.css'

export default function Card({article}){
    return(
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="card">
                            <Link to={`/articles/${article.id}`}>
                                <h2 className="title">{article.title}</h2>
                                <h3 className="sub-header">{article.subHeader}</h3>
                            </Link>
                            <p className="post-brief">Posted by <a href="#">{article.author}</a> on {article.creation}</p>
                            <hr className="my-4 "></hr>
                        </div>  
                    </div>
                </div>
            </div>
    );
}