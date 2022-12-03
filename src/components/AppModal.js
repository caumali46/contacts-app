import React from 'react';
import { Modal, Button } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';

export default function AppModal(props) {
  const { handleDelete } = props;
  return (
    <div>
      <Modal id="exampleModal" fade>
        <Modal.Dialog>
          <Modal.Content>
            <Modal.Header>
              <Modal.Title>Delete</Modal.Title>
              <Modal.Close>
                <span aria-hidden="true">&times;</span>
              </Modal.Close>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete this contact?
            </Modal.Body>
            <Modal.Footer>
              <Button secondary data-dismiss="modal">
                Cancel
              </Button>
              <Button danger onClick={handleDelete}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}
