import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const Voltage = () => {
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
    var name = "Voltage";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Электрическое напряжение</h1>
            <div className="centercontent">
                <p className="txt">Мы знаем, что электрический ток — это упорядоченное движение заряженных частиц, которое создаётся
                    электрическим полем, а оно при этом совершает работу. Работу сил электрического поля, создающего электрический ток, называют <mark className="mrk">работой тока</mark>.</p>
                <p className="txt">Можно с уверенностью сказать, что она зависит от силы тока, т. е. от электрического заряда</p>
                <p className="txt">Но не только от одной силы тока зависит работа тока. Она зависит ещё и от другой величины, которую называют <mark className="mrk">электрическим напряжением</mark> или просто <mark className="mrk">напряжением</mark>.
                </p>
                <p className="txtb">Напряжение — это физическая величина, характеризующая электрическое поле.</p>
                <p className="txt">Оно обозначается буквой <mark className="mrk">U</mark>.</p>
                <p className="txtb">Напряжение показывает, какую работу совершает электрическое поле при перемещении единичного положительного заряда из одной точки в другую.</p>
                <p className="txt">Зная работу тока А на данном участке цепи и весь электрический заряд q, прошедший по этому участку, можно определить напряжение U, т. е. <mark className="mrk">работу тока при перемещении единичного электрического заряда</mark>:</p>
                <MathComponent texExpression={`U=\\frac{A}{q}`}/>

            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default Voltage;