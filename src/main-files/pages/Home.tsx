
import '../../index.css'
import Hero from "../components/Hero.tsx"
import FeaturedProjects from '../components/FeaturedProjects.tsx'
import Certifications from '../components/Certifications.tsx';
import Portfolio from '../components/Portfolio.tsx';






function Home() {


    return (<>
    
        <Hero />
        <div className="max-w-[1000px] mx-auto">
                
                
            
            
            
            <div className=" p-[.5rem] m-[1rem] sml:m-[5rem]  sml:mt-0 mt-0 max-w-[1000px] mx-auto overflow-x-hidden ">
                

                <Portfolio />
                <FeaturedProjects />
                <Certifications />


            </div>
                

                

                
                
        </div>
        </>
    )
}


export default Home;


