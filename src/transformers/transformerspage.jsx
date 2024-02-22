import React from 'react'
import '../fightclub/fightclubpage.css'
import BasicExample from '../navbar';
import Footer from '../Footer'
function Transformer(){
    return(
        <>
        <BasicExample/>
        <div className='bgimagefight ' style={{marginTop:"80px"}}>
            <div className='moviename '>
                <h1>Transformers</h1>
                <p>2023  • 2h 34m</p>
           </div>
           <div className='container'>
            <div className='row'>
            
            <div className='text-center col-12 col-lg-3 order-2 order-md-1 align-items-center'>
                <img style={{height:"330px" ,width:"230px"}} src='https://m.media-amazon.com/images/M/MV5BNWI1NjkxM2MtOTU4My00YzQ5LTliNGMtNmFlM2U5NWM3MDY1XkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_FMjpg_UX1000_.jpg' />
                <div className='d-flex justify-content-center m-3'>
                    <h6 className='jorner '>Action</h6>
                    <h6 className='jorner'>Sci-fi</h6>
                    
                </div>
            </div>
            <div className='col-12 col-lg-9 order-1 order-md-2'>
            <iframe width="100%" height="90%" src="https://www.youtube.com/embed/6Vtf0MszgP8?si=Fx48RDkOEQJgLuu9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className=' order-3 p-3  borderbottom'>
                <h5>An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager.</h5>
            </div>
            <div className=' order-4 p-3 borderbottom'>
                <h3 style={{color:'#00ffff'}}>Director </h3>  <p> Michael Bay</p>
            </div>
            <div className=' order-5 p-3 borderbottom'>
                <h3 style={{color:'#00ffff'}}>Stars </h3> <p>     John Rogers• Josh Duhamel • Megan Fox</p>
            </div>
        </div>
        </div>
        <div className='d-flex justify-content-left m-5'>
            <h1 className='selectdate  text-center selectdatetime'>Fri<p>22</p></h1>
            <h1 className='selectdate  text-center selectdatetime'>Sat<p>23</p></h1>
            <h1 className='selectdate  text-center selectdatetime'>Sun<p>24</p></h1>
            <h1 className='selectdate  text-center selectdatetime'>Mon<p>25</p></h1>
        </div>
        <div className='cinemas'>
        <div className='container '>
            <div className='row m-5 borderbottom'>
                <div className='col-12 col-md-6'>
                    <h2>Vetri Cinemas</h2>
                </div>
            <div className='col-12 col-md-6 d-flex marginbottom '>
                <h1 className='selecttime  text-center selectdatetime'>11:00 am<p>2D</p></h1>
                <h1 className='selecttime  text-center selectdatetime'>03:00 pm<p>2D</p></h1>
                <h1 className='selecttime  text-center selectdatetime'>06:00 pm<p>2D</p></h1>
            </div>
            </div>
        </div>
   
        <div className='container '>
            <div className='row m-5 borderbottom'>
                <div className='col-12 col-md-6'>
                    <h2>jack Cinemas</h2>
                </div>
            <div className='col-12 col-md-6 d-flex marginbottom '>
                <h1 className='selecttime  text-center selectdatetime'>11:00 am<p>2D</p></h1>
                <h1 className='selecttime  text-center selectdatetime'>03:00 pm<p>2D</p></h1>
                <h1 className='selecttime  text-center selectdatetime'>06:00 pm<p>2D</p></h1>
                         
            </div>
        </div>
        </div>
        </div>
        <Footer/>
        </div>
        
        </>
    )
}

export default Transformer