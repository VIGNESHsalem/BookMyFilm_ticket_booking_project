import Card from 'react-bootstrap/Card';
import React from 'react';
import { useNavigate } from 'react-router';


function Moviemalayalam() {
  const navigate = useNavigate()
  return (
    <Card style={{ width: '18rem', backgroundColor:'#5D3FD3 ',color:'white'}}>
      <Card.Img variant="top" onClick={()=>navigate('/lucifer')} className='image11' src="https://www.cine-feuilles.ch/storage/app/uploads/public/610/a59/657/thumb_29836_360_480_0_0_auto.jpg" />
      <Card.Body>
        <Card.Title>Suicide Squad</Card.Title>
        <img src='https://pixner.net/boleto/demo/assets/images/movie/tomato.png'style={{marginLeft:'8%'}} /><span style={{padding:'10px'}}>19%</span>
        <img src='https://pixner.net/boleto/demo/assets/images/movie/cake.png' style={{marginLeft:'25%'}}/><span style={{padding:'10px'}}>81%</span>
        
      </Card.Body>
    </Card>
  );
}

export default Moviemalayalam;