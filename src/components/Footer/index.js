import './index.css'

const Footer =()=>{
    return(
        <div className='footer-section'>
            <div className='lg-footer'>
               <p className='contact'>Contact details</p>
               <a href="callto:6385 11 4626" className='phonenumber'>+91-6385 11 4626</a>
               <a href="mailto:dinesh21102002@gmail.com" className='sm-footer-gmail'>dinesh21102002@gmail.com</a>
            </div>
            <div className='sm-footer'>
               <a href="mailto:dinesh21102002@gmail.com" className="sm-footer-hire">HIRE ME</a>
            </div>
        </div>
    )
}

export default Footer