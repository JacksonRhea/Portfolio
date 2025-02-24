import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Image } from 'react-bootstrap';

interface Props {
  title: string;
  subheader: string;
  description: string;
  techstack: string[];
  mediaLink: string;
  modalImageLink: string;
  show: boolean;
  onHide: () => void;
}

function GenericModal(props: Props) {

  return (
    <Modal
      {...props}
      onHide={props.onHide}
      size="lg"
      centered
      data-bs-theme="dark"
      className='modal'
    >
      <Modal.Header closeButton>
        <Modal.Title className='opened-modal-title' id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 className='opened-modal-subheader'>{props.subheader}</h5>
        <div className='d-flex'>
          <Image className='opened-modal-img' src={props.modalImageLink} />
          <div>
            <h5 className='opened-modal-subheader'>Technologies Used</h5>
            <div className='tech-container'>
              {props.techstack.map((tech) => (
                <li className='tech'>{tech}</li>
              ))}
            </div>
          </div>
        </div>
        <p className='opened-modal-desc'>
          {props.description}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button target='_blank' className='button' href={props.mediaLink}>More Info</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GenericModal;