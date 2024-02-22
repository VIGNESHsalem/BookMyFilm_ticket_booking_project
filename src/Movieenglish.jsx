import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';

function Movieenglish() {
  const navigate = useNavigate()
  return (
    <Card style={{ width: '18rem', backgroundColor:'#5D3FD3 ',color:'white'}}>
      <Card.Img onClick={()=>navigate('/transformer')} variant="top" className='image11' src="https://static.tvtropes.org/pmwiki/pub/images/img_3540.jpeg" />
      <Card.Body>
        <Card.Title>Transformers</Card.Title>
        <img src='https://pixner.net/boleto/demo/assets/images/movie/tomato.png'style={{marginLeft:'8%'}} /><span style={{padding:'10px'}}>24%</span>
        <img src='https://pixner.net/boleto/demo/assets/images/movie/cake.png' style={{marginLeft:'25%'}}/><span style={{padding:'10px'}}>76%</span>
        
      </Card.Body>
    </Card>
  );
}

export default Movieenglish;