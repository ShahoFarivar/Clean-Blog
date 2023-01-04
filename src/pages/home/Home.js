// styles
import './Home.css'

import Articles from '../../components/Articles';
import Header from '../../components/Header';

export default function Home(){

    return(
        <div className = "home">
            <Header
                title="Clean Blog"
                subHeader="A Blog Theme by Start Bootstrap"
                image="https://startbootstrap.github.io/startbootstrap-clean-blog/assets/img/home-bg.jpg"
            />

            <section className="content">
                <Articles />
            </section>
           
        </div>
    );
}