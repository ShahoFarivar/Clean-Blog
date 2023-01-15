import { useFetch } from '../../hooks/useFetch'
import { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import bgImage from '../../images/home-bg.jpg';


//components
import Header from '../../components/Header'

// styles
import './NewArticle.css'

export default function Contact(){
    // const url = "https://api.minekraft.ir/posts"
    const url = "http://localhost:3000/articles"

    const {postData} = useFetch(url, 'POST')
    const { user, isLoading, error} = useAuth0();

    const [title, setTitle] = useState('')
    const [subHeader, setSubheader] = useState('')
    const [content, setContent] = useState('')
    const [sumbit, setSubmit] = useState('')

    const handleSubmit = (e) => {
        const author = user.nickname
        const date = new Date()
        const creation = date.toLocaleDateString()

        e.preventDefault();
        postData({title,subHeader,author,creation,content});
        setTitle('');
        setSubheader('');
        setContent('');
        setSubmit("Article created.")
    }

    return(
        <div>
            <Header 
                title="Make new article"
                subHeader="Try using CKeditor"
                image={bgImage}
            />
            <main className="mb-4">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <p>You can make new article here.</p>                         
                        <div className="my-5">
                            <form id="contactForm" onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="title" type="text"  required onChange={ (e) => {setTitle(e.target.value) }} value={title} />
                                    <label htmlFor="title">Title</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="subheader" type="text" onChange={ (e) => {setSubheader(e.target.value) }} value={subHeader}/>
                                    <label htmlFor="subheader">Sub-Header</label>
                                </div>
                                <div className="form-floating mb-3"> 
                                    <textarea className="form-control" id="content" required onChange={ (e) => {setContent(e.target.value) }} value={content}></textarea>
                                    <label htmlFor="content">Content</label>
                                </div>
                                <br/>
                                <button className="btn btn-primary text-uppercase older-btn" id="submitButton">Create</button>
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