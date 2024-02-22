import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';

function Moviemaruthu() {
  const navigate =useNavigate()
  return (
    <Card style={{ width: '18rem', backgroundColor:'#5D3FD3',color:'white'}}>
      <Card.Img variant="top" onClick={()=>navigate('/maruthu')} className='image11' src="https://image.tmdb.org/t/p/original/ccK2zbDwKs9xDa6JSvPKe2HuntC.jpg" />
      <Card.Body>
        <Card.Title>Maruthanayagam </Card.Title>
        <img src='https://pixner.net/boleto/demo/assets/images/movie/tomato.png'style={{marginLeft:'8%'}} /><span style={{padding:'10px'}}>10%</span>
        <img src='https://pixner.net/boleto/demo/assets/images/movie/cake.png' style={{marginLeft:'25%'}}/><span style={{padding:'10px'}}>90%</span>
        
      </Card.Body>
    </Card>
  );
}

export default Moviemaruthu;