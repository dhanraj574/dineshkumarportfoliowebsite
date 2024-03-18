import './index.css'
import  archi from '../../assets/Archi.png'
import  brent from '../../assets/brent.png'
import  calcious from '../../assets/calcious.png'
import  dashboard from '../../assets/dashboard.png'
import  eko from '../../assets/eko.png'
import  rapidmatch from '../../assets/Rapid match.png'

const Projects = () =>{
    return(
        <div className='projects-section'>
             <h1 className='projects-heading'>PROJECTS</h1>
             <ul className='projects'>
                <li className='project-item'>
                   <a href="https://www.behance.net/gallery/184741855/Rapid-match-instant-matching-dating-app"><img className='projects-img' src={rapidmatch} alt="rapidmatch"></img></a>
                </li>
                <li className='project-item'>
                   <a href="https://www.behance.net/gallery/188401587/Eko-music-streaming-app"><img className='projects-img' src={eko} alt="eko"></img></a>
                </li>
                <li className='project-item'>
                   <a href="https://www.behance.net/gallery/189714957/Brent-User-to-user-Bike-rental-app-UIUX-case-study"><img className='projects-img' src={brent} alt="brent"></img></a>
                </li>
                <li className='project-item'>
                   <a href="https://www.behance.net/gallery/182722991/FILMLOG-Dashboard-design-for-filmbuffs"><img className='projects-img' src={dashboard} alt="dashboard"></img></a>
                </li>
                <li className='project-item'>
                   <a href="https://www.behance.net/gallery/186378351/Archi-modern-architecture-firm-website"><img className='projects-img' src={archi} alt="archi"></img></a>
                </li>
                <li className='project-item'>
                   <a href="https://www.behance.net/gallery/181760779/Calcious-Minimalistic-calorie-tracker"><img className='projects-img' src={calcious} alt="calcious"></img></a>
                </li>
             </ul>
        </div>
    )
}

export default Projects