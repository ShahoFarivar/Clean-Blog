import Articles from '../../components/Articles';
import Header from '../../components/Header';
import bgImage from '../../images/home-bg.jpg';

// styles
import './Home.css'

export default function Home(){

    return(
        <div className = "home">
            <Header
                title="Clean Blog"
                subHeader="A Blog Theme by Start Bootstrap"
                image={bgImage}
            />

            <section className="content">
                <Articles />
            </section>
           
        </div>
    );
}