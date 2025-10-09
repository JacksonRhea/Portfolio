import { JSX } from 'react';
import Modal from 'react-bootstrap/Modal';

interface Props {
  closeButton: boolean;
  title: string;
  show: boolean;
  onHide: () => void;
  size: "sm" | "lg" | "xl" | undefined;
  renderContent: () => JSX.Element;
  renderButtons: () => JSX.Element;
}

function SnakeModal(props: Props) {

  return (
    <Modal
      {...props}
      onHide={props.onHide}
      size={props.size}
      centered
      data-bs-theme="dark"
      className='modal'
    >
      <Modal.Header closeButton={props.closeButton}>
        <Modal.Title className='opened-modal-title' id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          {props.renderContent()}
        </>
      </Modal.Body>
      <Modal.Footer>
        <>
          {props.renderButtons()}
        </>
      </Modal.Footer>
    </Modal>
  );
}

export default SnakeModal;