import React from 'react';
import App1 from "./App1";
const Noanswbtn = ({answer}) => {
    if (answer !== 0){
    return (
        <div>
            <button
                onClick={answer = 0}
            >Не отвечать</button>
        </div>
    );
    }
};

export default Noanswbtn;