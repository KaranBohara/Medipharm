import * as React from 'react';

import "./ProgressBar.css"


const ProgressBar =  ({width, percent, bg}) => {
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
      setValue(percent * width);
    },[setValue,percent,width]);
  
    return (
        <div className="progress-div">
          <div className="progress" style={{ width: `${value}%`,height:"16px",backgroundColor:`#${bg}`}}/>
        </div>
    );
  };

export default ProgressBar;