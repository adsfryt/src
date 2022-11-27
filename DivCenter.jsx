import React, {useRef, useState} from 'react';
import MOCK_DATA from './MOCK_DATA.json'
import List from "./List";
import {BrowserRouter} from 'react-router-dom';
import Center from "./Center";
const data = MOCK_DATA;


function DivCenter() {
    const [list, setlist] = useState(data);
    return (
        <div className="center">
            <p align="justify">
                <pre>

                </pre>
            </p>

            {/*<List carList={list}/>*/}
        </div>
    );
};

export default DivCenter;