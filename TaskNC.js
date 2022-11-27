import React from 'react';

const Task = (D) => {
    return (<div>
            <p className="utitletxt">Пример:</p>
            <div className="task">
                <p className="txt">{D.Y}</p>
                <div>
                    <p className="txt">Решение: {" " + D.R}</p>
                        <p className="txto">Ответ: {" " + D.O +"(" + D.EI + ")" }</p>
                </div>
            </div>
        </div>
    );
};

export default Task;