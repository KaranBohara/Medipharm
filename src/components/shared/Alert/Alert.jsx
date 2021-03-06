import React from 'react'
import { connect } from 'react-redux';
import { ToastContainer,toast,Slide } from "react-toastify";
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
        <ToastContainer className="toast-wrap" hideProgressBar draggable={false} position="top-right" transition={Slide} autoClose={2000} />
    )
}

const mapStateToProps = (state) => {
    return {
        alert: state.alert
    }
}

export default connect(mapStateToProps)(GlobalAlert)