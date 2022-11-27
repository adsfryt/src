import React, {useEffect, useState} from 'react';
import anime from "./animejs/anime.es";

const TaskFc = (D) => {

    var [yanswer,setyanswer] = useState('');
    var [sol,setsol] = useState('');
    var ifer = false;
    var t = D.ide + "y";

    function check() {
        const element1 = document.querySelector("#" + t);
        element1.classList.toggle("sendbtnansw1");


        var animat = anime({
            targets: '.' + D.ide,
            height: '300px',
            easing: 'easeInOutQuad',
            direction: 'alternate',
            loop: false
        });

        if(yanswer === D.O) {
            ifer = true;
        }
        if(ifer === true){
            setsol(<div className="task" >
                <p className="txt rig">Правильный ответ</p>
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
                        <p className="txto">Ответ: {" " + D.O +"(" + D.EI + ")" }</p>
                    </div>

                </div>
            </div>
            );
        }
        else{
            setsol(<div className="task" >
                    <p className="txt wrn">Неправильный ответ</p>
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
                            <p className="txto">Ответ: {" " + D.O +"(" + D.EI + ")" }</p>
                        </div>
                    </div>
                </div>
            );
        }
    }
    return (
        <div>
            <div className="taskfc">
                <p className="txt">{D.Y}</p>
                <p className="txta">Ваш ответ ({D.EI}):</p><input className="input_answer" onChange={e => setyanswer(e.target.value)}/>
                <div className="sendbtnanswdiv">
                    <div className="sendbtnanswd"><button className="sendbtnansw" id={t} onClick={check}>Ответить</button></div>
                </div>
                <div className={"lst " + D.ide}>
                    {sol}
                </div>
            </div>
        </div>
    );
};

export default TaskFc;