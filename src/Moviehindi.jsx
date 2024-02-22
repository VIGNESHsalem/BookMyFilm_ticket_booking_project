import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';
function Moviehindi() {
  const navigate = useNavigate()
  return (
    <Card style={{ width: '18rem', backgroundColor:'#5D3FD3 ',color:'white'}}>
      <Card.Img variant="top" onClick={()=>navigate('/Pk')} className='image11' src="https://stat5.bollywoodhungama.in/wp-content/uploads/2016/03/90846885.jpg" />
      <Card.Body>
        <Card.Title>PK</Card.Title>
        <img src='https://pixner.net/boleto/demo/assets/images/movie/tomato.png'style={{marginLeft:'8%'}} /><span style={{padding:'10px'}}>31%</span>
        <img src='https://pixner.net/boleto/demo/assets/images/movie/cake.png' style={{marginLeft:'25%'}}/><span style={{padding:'10px'}}>69%</span>
        
      </Card.Body>
    </Card>
  );
}

export default Moviehindi;