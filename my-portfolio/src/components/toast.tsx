import { Toast } from "react-bootstrap"
import ToastContainer from "react-bootstrap/ToastContainer"

interface Props {
  message: string;
  onShow: (show: boolean) => void;
  show: boolean;
  isSuccess: boolean;
}

function ToastModel(props: Props) {
  return (
    <ToastContainer className="top-center">
      <Toast onClose={() => props.onShow(false)} 
             show={props.show} 
             delay={4000} 
             autohide 
             className="toast" 
             style={{ backgroundColor: props.isSuccess ? "#28a745" : "#dc3545" }}>
        <Toast.Body>{props.message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default ToastModel