import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const CurrentStrength = () => {
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
    var name = "CurrentStrength";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Сила тока</h1>
            <div className="centercontent">
                <p className="txt">Действия электрического тока могут проявляться в разной степени
                    — сильнее или слабее. Опыты показывают, что интенсивность электрического тока зависит от заряда, проходящего по цепи в 1 с.</p>
                <p className="txt">Когда свободная заряженная частица — электрон в металле или ион в растворе кислот, солей или щелочей — движется
                    по электрической цепи, то вместе с ней происходит и перемещение заряда. Чем больше частиц переместится от одного полюса источника
                    тока к другому или просто от одного конца участка цепи к другому, тем больше общий заряд <mark className="mrk">q</mark>, перенесённый частицами.</p>
                <p className="txt">Электрический заряд, проходящий через поперечное сечение проводника в 1 с, определяет силу тока в цепи.
                </p>
                <p className="txtb">Значит, сила тока равна отношению электрического заряда q, прошедшего через поперечное сечение проводника, ко времени его прохождения t, т. е.</p>
                <MathComponent texExpression={`I=\\frac{q}{t}`}/>

                <p className="txt">где <mark className="mrk">I</mark> — сила тока.</p>
                <p className="txt">На Международной конференции по мерам и весам в 1948 г. было решено в основу определения <mark className="mrk">единицы силы тока</mark>
                    положить явление взаимодействия двух проводников с током.</p>

                <p className="txt">Силу взаимодействия проводников с током можно измерить. Эта сила, как показывают расчёты и опыты, зависит <mark className="mrk">от длины проводников, расстояния между ними,
                    среды, в которой находятся проводники</mark>, и, что самое важное для нас, от силы тока в проводниках. Если одинаковы все условия, кроме силы токов, то, чем
                    больше сила тока в каждом проводнике, тем с большей силой они взаимодействуют между собой.</p>
                <p className="txtb">За единицу силы тока принимают силу тока, при которой отрезки таких параллельных проводников длиной 1 м взаимодействуют с силой 2 • 10<sub>-7</sub> Н (0,0000002 Н).</p>
                <p className="txt">Эту единицу силы тока называют <mark className="mrk">ампером</mark> (А). Так она названа в честь французского учёного <mark className="mrk">Андре Ампера</mark>.
                </p>
                <p className="txt">За единицу электрического заряда принимают электрический заряд, проходящий сквозь поперечное сечение проводника при силе тока 1 А за время 1 с.</p>

            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default CurrentStrength;