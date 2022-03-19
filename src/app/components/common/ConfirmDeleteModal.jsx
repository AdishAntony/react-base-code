import { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

class ConfirmDeleteModal extends Component {
    constructor(props) {
        super(props);
    }

    toggle = () => {
        this.props.toggle();
    };

    render() {
        return (
            <span className="d-inline-block mb-2 mr-2">
                <Modal isOpen={this.props.show} toggle={this.toggle} className={''}>
                    <ModalHeader toggle={this.toggle}>Confirm Delete?</ModalHeader>
                    <ModalBody>Are you sure you want to delete this item?</ModalBody>
                    <ModalFooter>
                        <Button
                            color="link"
                            onClick={() => {
                                this.toggle();
                            }}>
                            No
                        </Button>
                        <Button
                            color="danger"
                            onClick={() => {
                                this.toggle();
                                this.props.onSuccess();
                            }}>
                            Yes
                        </Button>{' '}
                    </ModalFooter>
                </Modal>
            </span>
        );
    }
}

ConfirmDeleteModal.propTypes = {
    onSuccess: PropTypes.func,
    onClose: PropTypes.func,
    toggle: PropTypes.func,
    show: PropTypes.bool
};

export default ConfirmDeleteModal;
