import * as React from 'react';

import "./ProgressBar.css"


const ProgressBar =  ({width, percent, bg}) => {
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
      setValue(percent * width);
    });
  
    return (
      <div>
        <div className="progress-div col-lg-6 col-12">
          <div className="progress" style={{ width: `${value}px`,height:"24px",backgroundColor:`#${bg}`}}/>
        </div>
      </div>
    );
  };

export default ProgressBar;