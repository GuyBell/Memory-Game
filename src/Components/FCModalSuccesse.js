import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function FCModalSuccesse({ show, closeModal }) {
  return (
    <>
      <Modal className='ModalSuccesse' show={show} onHide={closeModal}>
        <Modal.Header>
          <Modal.Title><b>Well Done!</b></Modal.Title><br />
        </Modal.Header>
        <Modal.Body>You have successfully completed the game.</Modal.Body>
        <Modal.Footer><br />
          <Button className='button' onClick={() => closeModal()}>
            Play again
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}