import { Link } from 'react-router-dom'

// styles
import './Footer.css'


export default function Footer(){
    return(
            <footer className="border-top .footer">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <ul className="list-inline text-center footer-icons">
                                <li className="list-inline-item">               
                                    <Link to={{ pathname: "https://herewecode.io/" }} target="_blank">
                                        Twitter Icon
                                    </Link>    
                                </li>
                                <li className="list-inline-item">
                                    <Link to={{ pathname: "https://herewecode.io/" }} target="_blank">
                                        Facebook Icon
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to={{ pathname: "https://herewecode.io/" }} target="_blank">
                                        Github Icon 
                                    </Link>
                                </li>
                            </ul>
                            <div className="copyright">Copyright © Your Website 2022</div>
                        </div>
                    </div>
                </div>
        </footer>
    
    )
}