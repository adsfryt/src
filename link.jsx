import React from 'react';
import Commets from "./Commets";
import './App.css';

const Link = ({Link}) => {
    if(Link[0] !== undefined) {
        return (
            <div>
                <pre>ссылки:</pre>
                {
                    Link.map((link) => {
                        return(
                            <a href={"http://"+link}><p className="linktxt">{Link[0]}</p></a>
                        )
                    })
                }
            </div>
        );
    }
};

export default Link;