import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";

const Bin = ({
  show,
  onHide,
  setRemoveItem,
  cartItem,
  setCartItem,
  removeItem,
}) => {
  // State
  const [error, setError] = useState(false);
  // Functions
  const handleChange = ({ target }) => {
    if (cartItem >= target.value) {
      setError(false);
      setRemoveItem(target.value);
    } else {
      setError(true);
    }
  };

  const handleSubmit = () => {
    setCartItem((prev) => prev - removeItem);
    onHide();
  };
  return (
    <Modal
      show={show}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header onClick={onHide} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Remove Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && (
          <Alert variant="danger">Cannot remove this many items!</Alert>
        )}
        <Form.Select
          onChange={handleChange}
          aria-label="Default select example"
        >
          <option>How many items would you like to remove?</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value={cartItem}>All</option>
        </Form.Select>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Bin;