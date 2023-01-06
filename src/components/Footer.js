import { Link } from 'react-router-dom'

// styles
import './Footer.css'


export default function Footer(){
    return(
            <footer className="border-top">
                <div className="container px-4 px-lg-5 footer-icons">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <ul className="list-inline text-center">
                                <li className="list-inline-item">               
                                    <Link to={{ pathname: "https://minekraft.ir/" }} target="_blank">
                                    <i className="fa-brands fa-twitter icons"></i>
                                    </Link>    
                                </li>
                                <li className="list-inline-item">
                                    <Link to={{ pathname: "https://minekraft.ir/" }} target="_blank">
                                    <i className="fa-brands fa-facebook icons"></i>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to={{ pathname: "https://minekraft.ir/" }} target="_blank">
                                    <i className="fa-brands fa-github icons"></i>
                                    </Link>
                                </li>
                            </ul>
                            <div className="copyright">Copyright © Clean Blog 2023</div>
                        </div>
                    </div>
                </div>
        </footer>
    
    )
}
