import { Navigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Signinpage from './Signinpage'
import Signuppage from './Signuppage'
import logo from './homepage/images/logo.png'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
function BasicExample() {
 const navigate = useNavigate()
  return (
    <>
   <Navbar expand="lg" style={{backgroundColor:'purple' ,height:'90px'}} className='fixed-top w-100 ' >
      <Container className='ml-5'>
        <Navbar.Brand as={Link}  to='/'>
        <h1 className='theatername'><img src={logo} style={{height:40,width:100}} alt='logo'/>BookMyFilm</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:'transparent',backgroundColor:'purple'}}/>
        <Navbar.Collapse id="basic-navbar-nav" className='m-5'>
          <Nav className="mr-auto w-100" style={{backgroundColor:"purple"}}>
            <Nav.Link onClick={()=>navigate('/')} style={{color:'white',fontSize:'larger',fontWeight:'bold'}}>Home</Nav.Link>
            <Nav.Link href="#link"  style={{color:'white',fontSize:'larger'}}>Movies</Nav.Link>
            <Nav.Link href="#home"  style={{color:'white',fontSize:'larger'}}>About us</Nav.Link>
            <Nav.Link href="#link"  style={{color:'white',fontSize:'larger'}}>Contact us</Nav.Link>
            <Signinpage/>
            <Signuppage/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}


export default BasicExample;
