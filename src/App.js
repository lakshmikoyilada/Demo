import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Role from './Role';
import Courses from './Courses';
import Resources, { CheatCodes, Roadmaps } from './Resource';
import Contact from './Contact';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Header(){
  return(
    <div>
      
      <ul>
        <img src="Tech Buzz (1).png" className='logo-image'/>
        <li> <Link to="/">HOME</Link> </li>
        <li> <Link to="/role">ROLE BASED</Link> </li>
        <li> <Link to="/courses">COURSES BASED</Link> </li>
        <li> <Link to="/Resources">RESOURCES</Link> </li>
        <li> <Link to="/contact">CONTACT US</Link> </li>
        <div style={{ marginRight: '30px', float: 'right', display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faUser} size="2x" color='white' className='User'/>
          <span style={{ color:'white', marginTop: '55px',marginLeft: '8px', fontSize: '18px' }}>Profile</span>
        </div>
      </ul>
    </div>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="role" element={<Role />} />
          <Route path="courses" element={<Courses />} />
          <Route path="resources" element={<Resources />} >
            <Route path="cheat" element={<CheatCodes />} />
            <Route path="roadmaps" element={<Roadmaps />} />
          </Route>
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
    // <>
    //     < Navbar />
    //     <Home />
    //     < Role />
    //     <Courses />
    //     <resources />
    //     <Contact />
    // </>
  );
}

export default App;
