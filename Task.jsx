import React from 'react';

const Task = (D) => {
    return (<div>
        <p className="utitletxt">Пример:</p>
        <div className="task">
            <p className="txt">{D.Y}</p>
            <div>
                <div className="danon">
            <div className="dano">
                <p className="txt">Дано:</p>
                <p className="txt">{D.D}</p>

            </div>
                <div className="nayti">
                    <p className="txt">Найти:</p>
                    <p className="txt">{D.N1}</p>
                </div>
            </div>
            <div className="reshenie">
                <p className="txtr">Решение:</p>
                <p className="txt">{D.R}</p>
                <p className="txto">Ответ: {" " + D.O}</p>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Task;