import React from "react";
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Activate = () => {
    // const history=useHistory();
    return (
        <div className="user-verified-container">
            <Stack spacing={2} sx={{ width: '35%',marginTop:"2rem" }}>
      <Alert severity="success">Acoount activated successfully. Continue to Login! <Link to="/login" className="link-decoration"><span style={{cursor:"pointer", fontWeight:"bold",fontSize:".9rem"}}>
        Login</span></Link><LoginIcon style={{marginLeft:".2rem",marginTop:"-.2rem",cursor:"pointer"}}/></Alert>
    </Stack>
    <Link to="/login" className="link-decoration"><img alt="medimage" style={{marginTop:"3rem"}} src="https://www.linkpicture.com/q/med.png"></img>
    </Link>
        </div>
    )
}
export default Activate;