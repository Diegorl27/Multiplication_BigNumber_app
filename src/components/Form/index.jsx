import Button from "react-bootstrap/esm/Button";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { ADD_NEW } from "../../queries/index";
import { useMutation } from "@apollo/client";

export const FormNewOperation = ({ setModal, isMyModal }) => {
  const [createOperation] = useMutation(ADD_NEW);

  const [numx, setNumx] = useState('');
  const [numy, setNumy] = useState('');

  const handleSumit = (e) => {
    e.preventDefault();
    createOperation({ variables: { numx, numy} });
  };

  return (
    <Form onSubmit={handleSumit}>
      <Form.Group className="mb-3">
        <Form.Label>Number #1 for multiplication</Form.Label>
        <Form.Control
          type="number"
          name="numx"
          placeholder="Insert your data #1"
          required
          autoFocus
          onChange={(evt) => setNumx(evt.target.value)}
          value={numx}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Number #2 for multiplication</Form.Label>
        <Form.Control
          type="number"
          name="numy"
          placeholder="Insert your data #2"
          required
          autoFocus
          onChange={(evt) => setNumy(evt.target.value)}
          value={numy}
        />
      </Form.Group>
      <Button
        type="submit"
        variant="primary"
        className="m-4"
        onClick={() => setModal(!isMyModal)}
      >
        <strong>Add Operation</strong>
      </Button>
    </Form>
  );
};
