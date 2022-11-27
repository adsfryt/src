import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const  MechanicalWork = () => {
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
    var name = "MechanicalWork";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Механическая работа</h1>
            <div className="centercontent">
                <p className="txt">В обыденной жизни словом «работа» мы называем всякий полезный труд рабочего, инженера, учёного, учащегося.</p>
                <p className="txt">Понятие <mark className="mrk">работы</mark> в физике несколько иное. Это определённая физическая величина, а значит, её можно измерить.
                    В физике изучают прежде всего <mark className="mrk">механическую работу</mark>.</p>
                <p className="txt">Механическая работа совершается и в том случае, когда сила, действуя на тело (например, сила трения),
                    уменьшает скорость его движения. Желая передвинуть шкаф, мы с силой на него надавливаем, но если он при этом в
                    движение не приходит, то механической работы мы не совершаем.</p>
                <p className="txt">Можно представить себе случай, когда тело движется без участия сил (по инерции), в этом случае механическая работа также не совершается.</p>
                <p className="txtb">Итак, механическая работа совершается, только когда на тело действует сила и оно движется.</p>
                <p className="txt">Нетрудно понять, что чем большая сила действует на тело и чем длиннее путь, который проходит тело под действием этой силы, тем большая совершается работа.</p>
                <p className="txtb">Механическая работа прямо пропорциональна приложенной силе и прямо пропорциональна пройденному пути.</p>
                <p className="txt">Поэтому механическую работу измеряют произведением силы на путь, пройденный по направлению этой силы</p>
                <MathComponent texExpression={`A = F * s`}/>
                <p className="txt">где <mark className="mrk">А</mark> — работа, <mark className="mrk">F</mark> — сила и <mark className="mrk">s</mark> — пройденный путь.</p>
                <p className="txtb">За единицу работы принимают работу, совершаемую силой 1 Н, на пути, равном 1 м.</p>
                <p className="txt">Единица работы — <mark className="mrk">джоуль</mark> (Дж) названа в честь английского учёного Джоуля.</p>
                <p className="txtb">Если направление силы совпадает с направлением движения тела, то данная сила совершает <mark className="mrk">положительную работу</mark>.</p>
                <p className="txt">Если же движение тела происходит в направлении, противоположном направлению приложенной силы, например силы трения скольжения, то данная сила совершает <mark className="mrk">отрицательную работу</mark>.</p>
                <p className="utitletxt">Задачи:</p>
                <TaskFC EI={"Дж"} D={"V=0,5м3; p=2500кг/м3 h=20м"} N1={"A-?"} R={"A=F*s; F=Fтяж; m=2500*0,5=1250кг; F=10*1250=12500H; A=12500*20=250000Дж;"} O={"250000"} Y={"Вычислите работу, совершаемую при подъёме гранитной плиты объёмом 0,5 м3 на высоту 20 м. Плотность гранита 2500 кг/м3."}  ide={name + i[0]}/>
            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default MechanicalWork;