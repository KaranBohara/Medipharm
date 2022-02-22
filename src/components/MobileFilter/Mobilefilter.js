import React, { useState } from "react";
import "./Mobilefilter.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Filtertaskbar from "../Products_page/Filter_component/Filtertaskbar";
import Sortproducts from "../Products_page/SortBy_component/Sortproduct";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Mobilefilter = () => {
    const [showfilter, setShowfilter] = useState(false);
    return (
        <div className="mobile-filter-box">
            <div className="filter-icon-box" onClick={() => setShowfilter(true)}>
            <span>Filter</span>
            <span><ArrowDropDownIcon className="arrow-dropdown"/></span>
            </div>
            <Modal
                show={showfilter}
                onHide={() => setShowfilter(false)}
                aria-labelledby="filter-products"
                centered
            >
                <Modal.Header closeButton={true}>
                    <Modal.Title id="filter-products">
                        <div className="filter-header-modal">
                            Filters
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Filtertaskbar />
                    <Sortproducts/>
                </Modal.Body>
            </Modal>
        </div>
);
}
export default Mobilefilter;