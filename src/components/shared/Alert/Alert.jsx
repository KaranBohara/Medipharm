import React from 'react'
import { connect } from 'react-redux';
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetAlertAction } from '../../../actions/alertActions';

const GlobalAlert = props => {
   
    const { text, color } = props.alert

    setTimeout(() => props.dispatch(resetAlertAction()), 2000)

    if (text === '') {
        return <div></div>
    }
    toast(text,
        {
            type:color,
        })
    return (
        <ToastContainer className="toast-wrap" draggable={false} position="top-right" transition={Zoom} autoClose={1500} />
    )
}

const mapStateToProps = (state) => {
    return {
        alert: state.alert
    }
}

export default connect(mapStateToProps)(GlobalAlert)