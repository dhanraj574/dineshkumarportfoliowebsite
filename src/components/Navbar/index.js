import profile from '../../assets/profile.png'
import arrow from '../../assets/arrow.png'

import './index.css'

const Navbar = () =>{
    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return(
        <div className='navbar-section'>
            <div className='sm-navbar-cont'>
                <div className='sm-navbar-header'>
                    <h1 className='sm-navbar-name'>DINESH KUMAR</h1>
                    <h1 className='sm-navbar-role'>UI/UX designer</h1>
                </div>
                
                <div className='sm-navbar-bottom'>
                    <button className='backtotop-btn' onClick={scrollToTop}>BACK TO TOP</button>
                    <a href="https://www.figma.com/file/bOyVJi5oOnAifSwUrtcdgc/Dinesh-kumar-resume-with-QR?type=design&node-id=0-1&mode=design&t=iYbvngJ54Dc0czf2-0" className='sm-navbar-bottom-link'>VIEW CV</a>
                    <a href="mailto:dinesh21102002@gmail.com" className='sm-navbar-bottom-link'>MAIL ME</a>
                </div>
            </div>
            <div className="lg-navbar-cont">
               <div className="lg-navbar-profile">
                    <img className="lg-navbar-profile-img" src={profile} alt="profile img"/>
                    <h1 className='lg-navbar-name'>DINESH KUMAR</h1>
                    <div className='lg-navbar-link'>
                    <a href="https://www.figma.com/file/bOyVJi5oOnAifSwUrtcdgc/Dinesh-kumar-resume-with-QR?type=design&node-id=0-1&mode=design&t=iYbvngJ54Dc0czf2-0" className='lg-navbar-bottom-link'>VIEW CV</a>
                    <img className="arrow-img" src={arrow} alt="arrow"/>
                    </div>
                    <div className='lg-navbar-link'>
                    <a href="https://www.behance.net/dineshkumar871/projects" className='lg-navbar-bottom-link'>PROJECTS</a>
                    <img className="arrow-img" src={arrow} alt="arrow"/>
                    </div>
                </div>
                <div className='lg-navbar-link'>
                   <a href="mailto:dinesh21102002@gmail.com" className='lg-navbar-bottom-link'>MAIL ME</a>
                   <img className="arrow-img" src={arrow} alt="arrow"/>
                 </div>
            </div>
        </div>
    )
}
export default Navbar