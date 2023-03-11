import { Button } from "react-bootstrap";

import Card from "react-bootstrap/Card";

function ContactCard({ item, handleDelete, handleEdit }) {
  return (
    <Card
      style={{
        width: "18rem",
        fontSize: "30px",
        margin: "20px",
        backgroundImage:
          "url(https://i.pinimg.com/474x/f5/30/9d/f5309da36c9b96426e28f09b71e804f0.jpg)",
      }}
    >
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {item.surname}
        </Card.Subtitle>
        <Card.Text>{item.phone}</Card.Text>

        <Card.Text>{item.email}</Card.Text>
        <Button
          onClick={() => handleEdit(item.id)}
          variant="dark"
          style={{ margin: "30px", marginBottom: "10px" }}
        >
          edit
        </Button>
        <Button
          onClick={() => handleDelete(item.id)}
          variant="dark"
          style={{ margin: "30px", marginBottom: "10px" }}
        >
          delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
