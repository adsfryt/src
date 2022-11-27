import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const PressureTransmission = () => {
    // async function download(Src) {
    //     const image = await fetch(Src)
    //     const imageBlog = await image.blob()
    //     const imageURL = URL.createObjectURL(imageBlog)
    //
    //     const link = document.createElement('a')
    //     link.href = imageURL
    //     link.download = 'image.jpg'
    //     document.body.appendChild(link)
    //     link.click()
    //     document.body.removeChild(link)
    // }
    var name = "PressureTransmission";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Передача давления жидкостями и газами</h1>
            <div className="centercontent">
                <p className="txt">В отличие от твёрдых тел отдельные слои и молекулы жидкости или газа могут свободно
                    перемещаться относительно друг друга по всем направлениям.</p>
                <p className="txt">Подвижностью частиц газа и жидкости объясняется, что давление, производимое на них, передаётся
                    не только в направлении действия силы, а в каждую точку жидкости или газа. </p>
                <p className="txt"> давление газа всюду возрастёт. Значит, добавочное давление передаётся всем частицам
                    газа или жидкости. Так, если давление на газ около самого поршня увеличится на 1 Па, то во всех точках
                    внутри газа давление станет больше прежнего на столько же. На 1 Па увеличится давление и на стенки
                    сосуда, и на дно, и на поршень.</p>
                <p className="txtb">Давление, производимое на жидкость или газ, передаётся в любую точку без изменений во всех направлениях.</p>
                <p className="txt">Это утверждение называют законом Паскаля.</p>
            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default PressureTransmission;