import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import "./Searchpage.css";
import SearchBar from "../SearchBar/SearchBar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { useHistory } from "react-router-dom";
import apiCollection from "../../api/api";

const Searchpage=({
    isAuthenticated,
})=>
{
    const history=useHistory();
    const [items,setItems]=useState([]);
    const getMedicines=()=>
    {
     apiCollection.getProduct()
    .then(response => {
     setItems(response.data)
    });
    };
    useEffect(() => {
        getMedicines();
}, [isAuthenticated,history,items]);
    return(<div>
        <div className="phone-search-wrap">
        <ArrowBackIcon className='arrow-icon' onClick={() => history.goBack()}/>
        <SearchBar placeholder="Search for products" data={items}/>
        <KeyboardVoiceIcon className="microphone-icon"/>
        </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    user: state.userReducer.user,
    isAuthenticated: state.userReducer.isAuthenticated,
});
export default connect(mapStateToProps)(Searchpage);