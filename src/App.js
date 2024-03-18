
import Navbar from './components/Navbar'
import PortfolioBio from './components/PortfolioBio'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import './App.css';

function App() {
  return(
    
        <div className="app">
          
          <div className='navbar'>
          <Navbar />
          </div>
          
          
              
          <div  className='portfolio'>
           <PortfolioBio />
           </div>

           <div className='projects'>
           <Projects  />
           </div>

           <div className="skills">
           <Skills  />
           </div>
           

          <div className='footer'>
          <Footer  />
          </div>
          
          
            
            
            
           
        </div>
  

  )
}

export default App;
