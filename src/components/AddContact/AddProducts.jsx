import React, { useState } from "react";
import "./AddProduct.css";
const AddProducts = ({ handleAdd, handleAddContacts }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function handleAdd() {
    if (!name || !surname || !phone || !email) {
      alert("fill the blank");
      return;
    }

    let newObj = {
      name,
      surname,
      phone,
      email,
      id: Date.now(),
    };
    handleAddContacts(newObj);

    setName("");
    setSurname("");
    setPhone("");
    setEmail("");
  }

  return (
    <div className="contact">
      <h2>ContactBook</h2>
      <center>
        Name:
        <br />
        <input
          value={name}
          className="input"
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="name"
        />
        <br />
        Surname:
        <br />
        <input
          className="input"
          value={surname}
          onChange={(e) => {
            setSurname(e.target.value);
          }}
          type="text"
          placeholder="surname"
        />
        <br />
        Contact:
        <br />
        <input
          className="input"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder="contact"
        />
        <br />
        Email:
        <br />
        <input
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <br />
        <button className="btn" onClick={handleAdd}>
          Add Contact
        </button>
      </center>
    </div>
  );
};

export default AddProducts;
