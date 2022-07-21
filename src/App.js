import React, { useState } from "react";
import { Header, ViewList, ClearHistory, FormNewOperation } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function App() {
  const [isMyModal, setModal] = useState(false);
  

  return (
    <>
      <div
        className="Header bg-ligth text-center"
        style={{ width: "100%", height: "3rem" }}
      >
        <Header title={"Test Datagas"} />
      </div>

      <div
        className="bg-secondary text-center mt-2"
        style={{ width: "100%", height: "5rem" }}
      >
        <Button
          className="m-4"
          variant="primary"
          onClick={() => setModal(!isMyModal)}
        >
          <strong>Add Operation</strong>
        </Button>

        <ClearHistory />

        <Modal
          show={isMyModal}
          onHide={() => {
            setModal(!isMyModal);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add new Multiplication</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormNewOperation
              setModal={setModal}
              isMyModal={isMyModal}
            />
          </Modal.Body>
        </Modal>
      </div>

      <div className="list">
        <ViewList/>
      </div>
    </>
  );
}

export default App;
