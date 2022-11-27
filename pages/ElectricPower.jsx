import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const ElectricPower = () => {
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
    var name = "ElectricPower";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Мощность электрического тока</h1>
            <div className="centercontent">
                <p className="txt">Мы знаем, что мощность численно равна работе, совершённой в единицу времени.
                    Следовательно, чтобы найти среднюю мощность электрического тока, надо его работу разделить на время:</p>
                <MathComponent texExpression={`P=\\frac{A}{t}`}/>
                <p className="txt">где <mark className="mrk">Р</mark> — мощность тока (механическую мощность мы обозначали буквой N).</p>
                <p className="txt">Работа электрического тока равна произведению напряжения на силу тока и на время: А = UIt, следовательно,
                </p>
                <MathComponent texExpression={`P=U*I`}/>
                <MathComponent texExpression={`P=I^{2}*U`}/>
                <MathComponent texExpression={`P=\\frac{U^{2}}{R}`}/>
                <p className="txt">Измерить мощность электрического тока можно с помощью вольтметра и амперметра. Чтобы вычислить искомую мощность,
                    необходимо напряжение умножить на силу тока. Значение силы тока и напряжение определяют по показаниям приборов.</p>
                </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default ElectricPower;