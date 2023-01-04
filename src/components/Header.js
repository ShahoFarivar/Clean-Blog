import './Header.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

export default function Header({image,title,subHeader}){
    return(
        
            <header className='container-fluid'
                    style={{backgroundImage: `url(${image})`}}
            >
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="header-content">
                                <h1>{title}</h1>
                                <p>{subHeader}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>      
    );
}