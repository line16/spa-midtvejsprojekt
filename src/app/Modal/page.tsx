import React from "react";
import style from "./page.module.scss"


// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function Example() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <Button className={style.bookAtime}
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        Book a time!
      </Button>

      <Modal className={style.Modal_Body} tabindex="-1" toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className={style.modal_header}>
          <h5 className={style.modal_title} id="exampleModalLabel">
            fill in and submit the form and we will contact you.
          </h5>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
          </button>
          <ModalBody>
            <input type="text" name="navn" placeholder="Navn" />
            <input type="email" name="email" id="email" placeholder="email" />
            <input type="text" placeholder="besked" className={style.messageInput} />
          </ModalBody>
        <ModalFooter>
          <Button
            type="button"
            className={style.submitInput}
            onClick={() => setModalOpen(!modalOpen)}
          >
            Submit
          </Button>
        </ModalFooter>
        </div>
      
      </Modal>
    </>
  );
}

export default Example;