import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { connect } from 'react-redux';
import "./Searchpage.css";
import SearchBar from "../SearchBar/SearchBar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { useHistory } from "react-router-dom";
// import RecentSearchSlider from "../RecentSearch/RecentSearchSlider";
import MultiCarousel from "../Multi-Carousel/MultiCarousel";

const Searchpage=()=>
{
    const history=useHistory();
    return(<div>
        <div className="phone-search-wrap">
        <ArrowBackIcon className='arrow-icon' onClick={() => history.goBack()}/>
        <SearchBar placeholder="Search for products"/>
        <KeyboardVoiceIcon className="microphone-icon"/>
        </div>
        <div className="hide-component">
        <div className="recent-search-wrap">
        <div className="container-fluid">
        <div className="row mt-2 mb-1">
        <div className="col-10 d-flex justify-content-flex-start small">RECENT SEARCHES</div>
        <div className="col-2 text-danger small">EDIT</div>
        </div>
        <div className="row">
        <div className="col-12 d-flex justify-content-flex-start">
        <MultiCarousel/>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Searchpage;