import React from "react";
import ContactCard from "./ContactCard/ContactCard";

const ContactList = ({ contacts, handleDelete, handleEdit }) => {
  return (
    <div>
      <center style={{ fontSize: "30px", margin: "20px" }}>Products</center>
      <div className="d-flex justify-content-between flex-wrap w-75">
        {contacts.map((item) => (
          <ContactCard
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
