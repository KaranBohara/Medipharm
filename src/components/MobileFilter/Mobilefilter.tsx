import React, { useState } from "react";
import "./Mobilefilter.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Filtertaskbar from "../Products_page/Filter_component/Filtertaskbar";
import Sortproducts from "../Products_page/SortBy_component/Sortproduct";
const Mobilefilter = () => {
    const [showfilter, setShowfilter] = useState(false);
    const [showsortoptions,setShowsortoptions]=useState(false);
    const handleClosefilter = () => setShowfilter(false);
    const handleClosesort = () => setShowsortoptions(false);
    return (<div className="row d-flex justify-content-center">
        <div className="mobile-filter-box">
            <div className="icon-box" onClick={() => setShowsortoptions(true)} style={{ borderRight: "1px solid rgb(230, 230, 230)" }}><i className="fas fa-sort-amount-up-alt"></i><span style={{ fontSize: ".8rem" }}>Sort</span></div>
            <div className="icon-box" onClick={() => setShowfilter(true)}><i className="fas fa-filter"></i><span style={{ fontSize: ".8rem" }}>Filter</span></div>
            <Modal
                show={showfilter}
                onHide={() => setShowfilter(false)}
                dialogClassName="filter-modal"
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
                </Modal.Body>
                <Modal.Footer>
          <Button variant="secondary" onClick={handleClosefilter}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClosefilter}>
            Save
          </Button>
        </Modal.Footer>
            </Modal>
            <Modal
                show={showsortoptions}
                onHide={() => setShowsortoptions(false)}
                dialogClassName="filter-modal"
                aria-labelledby="sort-options"
                centered
            >
                <Modal.Header closeButton={true}>
                    <Modal.Title id="sort-options">
                        <div className="filter-header-modal">
                            Sort Products
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Sortproducts/>
                </Modal.Body>
                <Modal.Footer>
          <Button variant="secondary" onClick={handleClosesort}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClosesort}>
            Save
          </Button>
        </Modal.Footer>
            </Modal>
        </div>

    </div>);
}
export default Mobilefilter;