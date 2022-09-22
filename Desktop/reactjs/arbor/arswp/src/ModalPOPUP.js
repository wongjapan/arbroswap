import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.css";
import Head from "./Head";
import Modal from "./Popupcom/Modal";

export default function App() {
  const [show, setShow] = React.useState(false);
  return (
    <div className="container text-center">
      <Head />
      <button className="btn-primary" onClick={() => setShow(true)}>
        Modal
      </button>
      <Modal show={show} onClose={() => setShow(false)}>
        <h1> Hello World! </h1>
      </Modal>
    </div>
  );
}
