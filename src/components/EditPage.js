import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import bgImage from '../images/home-bg.jpg';

//components
import Header from './Header';

//hooks
import { useFetch } from '../hooks/useFetch';

//styles
import './EditPage.css'

export default function EditPage(){
    const [title, setTitle] = useState('')
    const [subHeader, setSubheader] = useState('')
    const [content, setContent] = useState('')

    const [sumbit, setSubmit] = useState('')

    const {id} = useParams()
    
    //fetch data
    // const url = "https://api.minekraft.ir/posts/" + id
    const url = "http://localhost:3000/articles/" + id
    const {data:article, isPending, error} = useFetch(url)
    //

    useEffect(() => {
        if(article){
            setTitle(article.title)
            setSubheader(article.subHeader)
            setContent(article.content)
        }
    },[isPending])

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEdit(id);
        setTitle('');
        setSubheader('');
        setContent('');
        setSubmit("Article updated.")
    }

    async function handleEdit() {
        const author = article.author
        const creation = article.creation
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, subHeader, content, author, creation })
        };
        return (
            await fetch(url, requestOptions)
                .then(response => response.json())
        )
    }

    return(
        <div>
            <Header 
                title="Edit Article"
                subHeader=""
                image={bgImage}
            />
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">                   
                            <div className="my-5">
                                <form id="contactForm" onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="title" type="text"  required onChange={ (e)=>{setTitle(e.target.value) }} value={title} />
                                        <label htmlFor="title">Title</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="subheader" type="text" onChange={ (e)=>{setSubheader(e.target.value) }} value={subHeader}/>
                                        <label htmlFor="subheader">Sub-Header</label>
                                    </div>
                                    <div className="form-floating mb-3"> 
                                        <textarea className="form-control edit-content" id="content" required onChange={ (e)=>{setContent(e.target.value) }} value={content}></textarea>
                                        <label htmlFor="content">Content</label>
                                    </div>
                                    <br/>
                                    <button className="btn btn-primary text-uppercase older-btn" id="submitButton">Update Article</button>
                                </form>
                                <p className="submit">{sumbit}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}