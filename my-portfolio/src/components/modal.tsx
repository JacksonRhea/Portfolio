import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface Props {
  title: string;
  description: string;
  techstack: string[];
  githubLink: string;
  imageLink: string;
  show: boolean;
  onHide: () => void;
}

function GenericModal(props: Props) {

  return (
    <Modal
      {...props}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='modal'
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          {props.description}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className='button' href={props.githubLink}>View on Github</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GenericModal;