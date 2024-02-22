import { useNavigate } from 'react-router';
import Card from 'react-bootstrap/Card';


function MovieFightclub() {
  const navigate =useNavigate()
  return (
    <Card  style={{ width: '18rem', backgroundColor:'#5D3FD3 ',color:'white'}}>
      <Card.Img onClick={() =>navigate('/fight')} variant="top" className='image11' src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81XXxWVKbOL._AC_UF1000,1000_QL80_.jpg" />
      <Card.Body>
        <Card.Title >Oppenheimer</Card.Title>
        <img  src='https://pixner.net/boleto/demo/assets/images/movie/tomato.png'style={{marginLeft:'8%'}} /><span style={{padding:'10px'}}>29%</span>
        <img src='https://pixner.net/boleto/demo/assets/images/movie/cake.png' style={{marginLeft:'25%'}}/><span style={{padding:'10px'}}>71%</span>

      </Card.Body>
    </Card>
  );
}

export default MovieFightclub;
        