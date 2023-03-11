import { useState } from "react";
import AddProducts from "./components/AddContact/AddProducts";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import ContactCard from "./components/ContactCard/ContactCard";
import EditProduct from "./EditProduct/EditProduct";

const App = () => {
  const [contacts, setContacts] = useState([]);
  // ! =========create==============
  function handleAddContacts(newObj) {
    let newContacts = [...contacts];
    newContacts.push(newObj);
    setContacts(newContacts);
  }

  //!===========delete==========
  function handleDelete(id) {
    let newContacts = contacts.filter((item) => item.id !== id);
    setContacts(newContacts);
  }

  // !========edit====================
  const [showEditModal, setShowEditModal] = useState(false);
  const editModalClose = () => setShowEditModal(false);
  const editModalShow = () => setShowEditModal(true);

  const [editContact, setEditContact] = useState({});

  function handleEdit(id) {
    let editedObj = contacts.filter((item) => item.id == id);
    setEditContact(editedObj[0]);
    editModalShow();
  }

  function saveEdit(editedObj) {
    let newContacts = contacts.map((item) => {
      if (item.id == editedObj.id) {
        return editedObj;
      }
      return item;
    });
    setContacts(newContacts);
    setShowEditModal(false);
  }
  return (
    <div>
      <Header />
      <AddProducts handleAddContacts={handleAddContacts} />

      <ContactList
        contacts={contacts}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      {showEditModal && (
        <EditProduct
          editContact={editContact}
          saveEdit={saveEdit}
          editModalClose={editModalClose}
          show={editModalShow}
        />
      )}
    </div>
  );
};

export default App;
