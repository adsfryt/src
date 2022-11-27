import {Link} from "react-router-dom";
import React from "react";

const List = ({ cList, ll }) => {
    var r = cList.length;
    if(r !== 0 && r !== ll){

    return (
        <div className="list">
            {
                cList.map((them, index) => {
                    if(r-1 !== index){
                    return (
                        <div className="comm"><Link to={'/' + them.email}>
                            <div className="commname"><p className="commnametxt">{them.firstname}</p></div></Link>
                        </div>
                    )
                }
                })
            }
            <div className="comm1">
                <div className="commname"><Link to={'/' + cList[r-1].email}><p className="commnametxt">{cList[r-1].firstname}</p></Link></div>
            </div>
        </div>
    );
}
}

export default List;