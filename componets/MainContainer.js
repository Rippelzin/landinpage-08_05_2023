import Footer from './Footer'
import Navbar from './Navbar'
import Ellipses from '../componets/Ellipses'
import Particles from './ParticlesBg'



export default function MainContainer({children}) {
    return(
        <>

            <Navbar />
            {/*<Ellipses/>*/}
            
            <div className='main_container'>{children}</div>
            <Footer />
        </>
    )
}