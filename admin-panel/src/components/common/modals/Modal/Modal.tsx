import "./Modal.scss";
import BModal, { ModalProps } from "react-bootstrap/Modal";

type PropTypes = ModalProps & {

}

const Modal = ({ title, children, centered, ...rest }: PropTypes) => {
    return (
        <BModal
            {...rest}
            centered
        >
            <BModal.Header closeButton>
                <BModal.Title>{title}</BModal.Title>
            </BModal.Header>
            <BModal.Body>
                {children}
            </BModal.Body>
        </BModal>
    )
}

export default Modal
