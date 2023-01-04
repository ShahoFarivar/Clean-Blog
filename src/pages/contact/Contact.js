// styles
import Header from '../../components/Header'

import './Contact.css'

import { useFetch } from '../../hooks/useFetch'
import { useState } from 'react'

export default function Contact(){
    const url = 'http://localhost:3000/contactForm'
    const {postData} = useFetch(url, 'POST')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [sumbit, setSubmit] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        postData({name,email,phone,message});
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setSubmit("form submitted.")
    }

    return(
        <div>
            <Header 
                title="Contact Me"
                subHeader="Have questions? I have answers."
                image="https://startbootstrap.github.io/startbootstrap-clean-blog/assets/img/contact-bg.jpg"
            />
            <main className="mb-4">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                        <div className="my-5">
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <div className="form-floating">
                                <input className="form-control" id="name" type="text"  required onChange={ (e)=>{setName(e.target.value) }} value={name} />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control" id="email" type="email" required onChange={ (e)=>{setEmail(e.target.value) }} value={email}/>
                                <label htmlFor="email">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control" id="phone" type="number"  required onChange={ (e)=>{setPhone(e.target.value) }} value={[phone]}/>
                                <label htmlFor="phone">Phone Number</label>
                            </div>
                            <div className="form-floating">
                                <textarea className="form-control" id="message" required onChange={ (e)=>{setMessage(e.target.value) }} value={message}></textarea>
                                <label htmlFor="message">Message</label>
                            </div>
                            <br/>
                            <button className="btn btn-primary text-uppercase" id="submitButton">Send</button>
                        </form>
                        <p class="submit">{sumbit}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </div>
    )
}