import React from 'react';
import {Modal} from "react-bootstrap"
import Medilogo from "../assets/medicine.png";
import CloseIcon from '@mui/icons-material/Close';

const CustomModal = (props) => {
    console.log(props)
  return(
      <div>
      <Modal
        show={props.show}
        size="lg"
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="my-modal"
      >
        <Modal.Header>
          <Modal.Title>
          <div className='modal-title'>
          <img src={Medilogo} alt='medilogo' width="30px" height="30px"/>
          <span style={{marginLeft:".5rem",fontSize:"1.2rem",color:"#006692"}}>{props.title}</span>
          <CloseIcon className='close-icon' onClick={props.handleClose}/>
          </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {props.component}
        </Modal.Body>
      </Modal>
      </div>
  );
};

export default CustomModal;
