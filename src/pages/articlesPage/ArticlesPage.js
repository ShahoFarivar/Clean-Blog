import Header from '../../components/Header'
import bgImage from '../../images/post-bg.jpg'

//components
import Articles from '../../components/Articles'

//styles
import './ArticlesPage.css'

export default function ArticlesPage(){
    return(
        <div>
            <Header 
                title="Articles"
                subHeader=""
                image={bgImage}
            />
            <section className="content">
                <Articles />
            </section>
        </div>
    )
}