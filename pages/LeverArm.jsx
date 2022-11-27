import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const LeverArm = () => {
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
    var name = "LeverArm";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Рычаг. Равновесие сил</h1>
            <div className="centercontent">
                <p className="txt">Рассмотрим самый простой и распространённый механизм — рычаг.</p>
                <p className="txt">Рычаг представляет собой твёрдое тело, которое может вращаться вокруг неподвижной опоры.</p>
                <img width="50%" src={require('../photo/8.png')}/>
                <p className="txt">На схеме показано, как рабочий для поднятия груза использует в качестве рычага лом.
                    В первом случае рабочий с силой F нажимает на конец лома В, во втором — приподнимает конец В.</p>
                <p className="txt">Рабочему нужно преодолеть вес груза Р — силу, направленную вертикально вниз.
                    Он поворачивает для этого лом вокруг оси, проходящей через единственную <mark className="mrk">неподвижную</mark> точку лома — точку его
                    опоры О. Сила F, с которой рабочий действует на рычаг, меньше силы Р, таким образом, рабочий получает <mark className="mrk">выигрыш
                        в силе</mark>. При помощи рычага можно поднять такой тяжёлый груз, который без рычага поднять нельзя.
                </p>
                <p className="txtb">Кратчайшее расстояние между точкой опоры и прямой, вдоль которой действует на рычаг сила, называется плечом силы.</p>
                <p className="txt">Чтобы найти плечо силы, надо из точки опоры опустит перпендикуляр на линию действия силы.</p>
                <img width="50%" src={require('../photo/9.png')}/>
                <p  className="txt">Рычаг находится в равновесии тогда, когда силы, действующие на него, обратно пропорциональны плечам этих сил.</p>
                <MathComponent texExpression={`\\frac{l_{1}}{l_{2}}=\\frac{F_{1}}{F_{2}}`}/>
                <p className="txt">где F1 и F2 — силы, действующие на рычаг, 1 и 2 — плечи этих сил
                </p>
                <p className="txt">Правило равновесия рычага было установлено Архимедом около 287—212 гг. до н. э.</p>
                <p className="txt">Из этого правила следует, что <mark className="mrk">меньшей силой можно уравновесить при помощи рычага большую силу</mark>. Пусть одно плечо рычага в 2 раза больше другого. (2 схема)
                    Тогда, прикладывая в точке А силу, например, в 400 Н, можно в точке В уравновесить рычаг силой, равной 800 Н. Чтобы поднять ещё более тяжёлый груз, нужно увеличить длину плеча рычага, на которое действует рабочий.</p>
                <p className="utitletxt">Задачи:</p>
                <TaskFC EI={"Н"} D={"m=240кг; g=10Н/кг; l1=2,4м; l2=0,6м; "} N1={"F1-?"} R={"F1/F2=l1/l2; F1=F2*l2/l1; F2=Pтяж; F2=10*240*2400H; F1=2400*0,6/2,4=600H;"} O={"600"} Y={"С помощью рычага рабочий поднимает каменную глыбу массой 240 кг (см. рис. 164). Какую силу прикладывает он к большему плечу рычага, равному 2,4 м, если меньшее плечо равно 0,6 м?"} S={"lg"} ide={name + i[0]}/>
            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default LeverArm;