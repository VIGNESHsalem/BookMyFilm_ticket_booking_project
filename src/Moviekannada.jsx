import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';
function Moviekannada() {
  const navigate = useNavigate()
  return (
    <Card style={{ width: '18rem', backgroundColor:'#5D3FD3 ',color:'white'}}>
      <Card.Img variant="top" onClick={()=>navigate('/kantara')} className='image11' src="https://middaycdn.s.llnwi.net/Radiocity-images/images/uploads/web-stories/VijayTamana_ws.png" />
      <Card.Body>
        <Card.Title>Kantara</Card.Title>
        <img src='https://pixner.net/boleto/demo/assets/images/movie/tomato.png'style={{marginLeft:'8%'}} /><span style={{padding:'10px'}}>25%</span>
        <img src='https://pixner.net/boleto/demo/assets/images/movie/cake.png' style={{marginLeft:'25%'}}/><span style={{padding:'10px'}}>75%</span>
        
      </Card.Body>
    </Card>
  );
}

export default Moviekannada;