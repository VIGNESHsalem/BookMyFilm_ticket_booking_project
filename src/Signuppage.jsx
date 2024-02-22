
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
function Signuppage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      

      <Modal show={show} onHide={handleClose} style={{marginTop:'12%'}}>
        <Modal.Header closeButton>
          <Modal.Title>SignUp</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <Form >
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>  </Form.Label>
        <Form.Control type="email" placeholder="Email" />
        <Form.Text className="text-muted">
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>  </Form.Label>
        <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">

        </Form.Group>
         <div style={{textAlign:'center'}}>
        <Button variant="primary" type="submit" className='buttonsignin'>
        SignUp
        </Button>
        <h6>Already have an account ? <span style={{color:'#001539'}} className='signuphover'>SignIn</span></h6>
        </div>
        </Form>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Signuppage;