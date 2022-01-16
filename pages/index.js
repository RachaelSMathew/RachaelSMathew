import Head from 'next/head'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import About from './AboutComponent'
import Experiences from './ExperiencesComponent'
import Skills from './SkillsComponent'


export default function Home() {
        return (
            <div className="container">
            <Head>
                <title>Rachael M.</title>
                <link rel="icon" href="./favicon.ico" />
            </Head>

            <div className="stars"></div>
            <div className="twinkling"></div>
            <div className="clouds"></div>
            <Header/>
            <About/>
            <div className="ExperiencesStyles">
            <Experiences/>
            </div>
            <Skills/>
            <div className="bottomPadding"></div>
            <Footer/>
            </div>


  
                
        )
}
