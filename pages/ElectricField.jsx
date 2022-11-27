import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const ElectricField = () => {
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
    var name = "ElectricField";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Электрическое поле</h1>
            <div className="centercontent">
                <p className="txt">Опыты, позволяющие обнаружить притяжение или отталкивание заряженных тел, убеждают нас
                    в том, что <mark className="mrk">электрические заряды взаимодействуют на расстоянии</mark>. Причём чем ближе друг к другу
                    находятся наэлектризованные тела, тем взаимодействие между ними сильнее, чем дальше — тем слабее.</p>
                <p className="txt">В результате длительного изучения электрических явлений установлено, что всякое заряженное тело окружено электрическим полем.</p>
                <img width="30%" src={require('../photo/12.png')}/>
                <p className="txt">Электрическое поле — это особый вид материи, отличающийся от вещества.
                </p>
                <p className="txt">Сила, с которой электрическое поле действует на внесённый в него электрический заряд, называется электрической силой.</p>
                <p className="txt">Многочисленные опыты позволяют сделать вывод о том, <mark className="mrk">что вблизи заряженного тела действие поля сильнее, а по мере удаления от него действие поля ослабевает</mark>.</p>

            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default ElectricField;