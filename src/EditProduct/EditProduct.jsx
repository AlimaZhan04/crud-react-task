import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditModal({ editContact, saveEdit, editModalClose, show }) {
  const [contactToEdit, setContactEdit] = useState(editContact);

  const editName = (e) => {
    let newObj = {
      ...contactToEdit,
      name: e.target.value,
    };
    setContactEdit(newObj);
  };

  const editSurname = (e) => {
    let newObj = {
      ...contactToEdit,
      surname: e.target.value,
    };
    setContactEdit(newObj);
  };

  const editPhone = (e) => {
    let newObj = {
      ...contactToEdit,
      phone: e.target.value,
    };
    setContactEdit(newObj);
  };

  const editEmail = (e) => {
    let newObj = {
      ...contactToEdit,
      email: e.target.value,
    };
    setContactEdit(newObj);
  };
  console.log(contactToEdit);
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={show} onHide={editModalClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>ADD YOUR PRODUCT</Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ borderColor: "", backgroundColor: "black" }}>
            <center>
              Name: <br />
              <input
                onChange={editName}
                value={contactToEdit.name}
                type="text"
                placeholder="Enter name"
              />
              <br />
              Surname: <br />
              <input
                onChange={editSurname}
                value={contactToEdit.surname}
                type="text"
                placeholder="Enter surname"
              />
              <br />
              E-mail: <br />
              <input
                onChange={editPhone}
                value={contactToEdit.phone}
                type="text"
                placeholder="Enter E-mail"
              />
              <br />
              Phone number: <br />
              <input
                onChange={editEmail}
                value={contactToEdit.email}
                type="text"
                placeholder="Enter phone number"
              />
            </center>
          </Modal.Body>

          <Modal.Footer>
            <Button
              style={{ backgroundColor: "black" }}
              onClick={editModalClose}
              variant="secondary"
            >
              Close
            </Button>
            <Button
              style={{ backgroundColor: "black" }}
              onClick={() => saveEdit(contactToEdit)}
              variant="primary"
            >
              Save changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}

export default EditModal;
