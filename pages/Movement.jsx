import React, {Component, useEffect, useRef} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";

import anime from "../animejs/anime.es";


class Movement extends React.Component{

    componentDidMount(){
            var path1 = anime.path('#svgdivin path');
            anime({
                targets: '#svgdivin .el1',
                translateX: path1('x'),
                translateY: path1('y'),
                rotate: path1('angle'),
                easing: 'linear',
                duration: 10000,
                loop: true
            });

    }
    render() {
        return (
            <div className="qw">
                <h1 className="titletxt">Движение</h1>
                <div className="centercontent">
                    <p className="txt">Когда мы говорим о движении тела, то всегда имеем в виду, что оно
                        перемещается относительно других тел. Для того чтобы узнать, движется автомобиль или нет,
                        проследим, как меняется его положение относительно других тел. Например, полотна дороги, домов,
                        деревьев.
                        Если положение автомобиля меняется <mark className="mrk">относительно</mark> этих тел, то
                        говорят, что он движется относительно этих тел.
                    </p>
                    <p className="txtb">Итак, чтобы судить о движении тела, надо узнать, меняется ли положение этого
                        тела среди окружающих его тел.</p>
                    <p className="txt">
                        Если положение автомобиля меняется относительно домов или деревьев, то говорят, что он движется
                        относительно этих тел.
                        Если же положение движущегося автомобиля не меняется относительно, например, движущегося поезда,
                        то автомобиль и поезд
                        относительно друг друга не движутся, а находятся в состоянии покоя.
                    </p>
                    {/*<MathComponent texExpression={`\\int_0^\\infty x^2 dx`} a ={8}/>*/}
                    <p className="txt">Если тело изменяет своё положение в пространстве, переходя из одного места в
                        другое, тело движется по некоторой
                        линии, которую называют траекторией движения тела. По форме она может быть <mark
                            className="mrk">прямой</mark> или <mark className="mrk">кривой</mark>.
                    </p>
                    <p className="txtb">Длина траектории, по которой движется тело в течение некоторого промежутка
                        времени, называется путём.</p>
                    <p className="txt">Путь обозначают буквой <mark className="mrk">S</mark>.</p>
                    <div className="svgdiv">
                        <div className="svgdivin" id="svgdivin">
                            <div className="el1 circle">

                            </div>
                            <svg className="svgim" viewBox="0 0 386.5 395.66">
                                <path className="be908176-a08a-41ce-99fd-3bf7bcdcc6b0"
                                      d="M252.7,276.1,215.35,453.32l-96.2-120.26,205.07,36.71L273.58,483.06l141.14-57L306,327.37l76.44-122.15,101.9,37.34,17.72,96.2S413.46,366,410.92,366s-84.17-110.75-84.17-110.75l7.59-107.6L249.53,91.29l10.13,84.81-91.14,12.66"
                                      transform="translate(-116.71 -89.26)"/>
                            </svg>
                        </div>
                        <p className="txtbn">Траектория движения молекуы</p>
                    </div>
                    <p className="txt">Основной единицей пути в Международной системе (СИ) является <mark
                        className="mrk">метр</mark> (м).
                    </p>
                    <p className="utitletxt">Равномерное и неравномерное движение</p>
                    <p className="txtb">Если тело за любые равные промежутки времени проходит равные пути, то его
                        движение называют равномерным.</p>
                    <p className="txt">Равномерное движение встречается очень редко. Практически никогда водителю
                        автомобиля не удаётся поддерживать
                        равномерность движения — по разным причинам приходится ехать то быстрее, то медленнее.</p>
                    <p className="txt"> Неравномерным является также движение молекул газа. Они, ударяясь друг о друга,
                        на какое-то
                        мгновение останавливаются, затем снова разгоняются.</p>
                    <p className="txt">Всё это примеры <mark className="mrk">неравномерного</mark> движения.</p>
                </div>

                {/*<a href={require('../15.jpg')} >fffffffffffffff</a>*/}
                <App1 name={"Movement"}/>
            </div>
        );
    }
};

export default Movement;