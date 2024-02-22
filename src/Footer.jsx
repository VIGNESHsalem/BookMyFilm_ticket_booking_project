import React from 'react';
import logo from './homepage/images/logo.png'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter  className='text-center text-lg-start text-muted' style={{background:'purple'}}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{ color:'white'}}>
        <div className='me-5 d-none d-lg-block'>
          <span>Contact us on social networks:</span>
        </div>

        <div >
          <a href='#' className='me-4 text-reset '>
            <MDBIcon className='footericon' style={{ color:'white'}} fab icon='facebook-f' />
          </a>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon  className='footericon' style={{ color:'white'}} fab icon='twitter' />
          </a>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon className='footericon' style={{ color:'white'}} fab icon='google' />
          </a>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon className='footericon' style={{ color:'white'}} fab icon='instagram' />
          </a>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon  className='footericon' style={{ color:'white'}} fab icon='linkedin' />
          </a>
        </div>
      </section>

   
        <MDBContainer className='text-center ' style={{ color:'white'}}>
          <MDBRow >
            <MDBCol md='10' sm='12' className='mt-5 mb-5 'gr >
            
              <h6 className='text-uppercase '>
              <img src={logo} style={{height:50,width:120}} alt='logo'/>
              BookMyFilm
              </h6>
              <p >
                Welcome to <span style={{color:'#00ffff'}}>BookMyFilm</span> – your gateway to unforgettable experiences! At BookMyFilm, we are passionate about bringing people closer to the events and destinations that matter most to them.
Our mission is simple: to make ticket booking effortless, enjoyable, and accessible. We understand the thrill of watching movies, and we're here to make those experiences a reality for you.
              </p>
            </MDBCol>

            <MDBCol md='2' sm='12'  className='text-center mt-5 mb-5'>
              <h6 className='text-uppercase '>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Ukkadam ,Coimbatore
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                BookFilm@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 91 7339138428 
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
     

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color:'white',borderTopStyle:'solid', borderTopColor:'white',borderTopWidth:'1px'}}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href=''>
        BookMyFilm.com
        </a>
      </div>
    </MDBFooter>
  );
}