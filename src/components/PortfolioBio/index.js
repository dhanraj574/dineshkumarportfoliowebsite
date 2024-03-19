import profile from '../../assets/profile.png'

import './index.css'

const PortfolioBio = () =>{
    return(
        <div className='portfoliobio-section'>
            <div className='sm-portfoliobio-profile'>
                <img className="portfoliobio-img" src={profile} alt="profile img"/>
                <div className='portfoliobio-available'>
                    <div className='available-img'>
                    
                    
                    </div>
                    <h1 className='available-text'>AVAILABLE HIRE</h1>
                </div>
            </div>
            <div className='lg-portfolio-profile'>
                <h1 className='portfolio-text'>DIGITAL DESIGNER</h1>
            </div>
            <div className='portfoliobio-bio'>
                <p className='portfolio-bio'>A Passionate UI/UX designer, I possess robust proficiency in all major <span className='bio-highlights'>UI design tools</span>. Additionally, I can <span className='bio-highlights'>articulate</span> and discern the nuanced UX elements across various products in everyday conversations.</p>
                <div className='portfolio-links'>
                   <a href="mailto:dinesh21102002@gmail.com" className="portfolio-hire">HIRE ME</a>
                   <div className='portfolio-sociallink'>
                   <a href="https://www.behance.net/dineshkumar871" className="portfolio-link">BEHANCE</a>
                   <a href="https://www.linkedin.com/in/dineshkumar-s-ux-designer/" className="portfolio-link">LINKED IN</a>
                   </div>
                </div>
            </div>

        </div>
    )
}

export default PortfolioBio