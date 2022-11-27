import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const BodyBalance = () => {
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
    var name = "BodyBalance";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Условия равновесия тел</h1>
            <div className="centercontent">
                <p className="utitletxt">Центр тяжети тела</p>
                <p className="txt">При создании машин, механизмов и различных конструкций важно знать, при каких условиях
                    они будут устойчивыми, т. е. находиться в равновесии. Каким же образом можно добиться равновесия тела?
                    Возьмём линейку и, обвязав её петлёй, подвесим на нити. Затем, перемещая петлю по линейке, можно найти
                    положение, в котором линейка будет находиться в равновесии. В этом случае говорят, что линейка подвешена
                    в центре тяжести. Центр тяжести имеется у каждого тела. Что же такое центр тяжести? Разделим мысленно тело
                    на несколько частей. На каждую часть будет действовать сила тяжести, которая всегда направлена вертикально вниз</p>
                <p className="txtb">Точку приложения равнодействующей сил тяжести, действующих на отдельные части тела, называют центром тяжести тела..</p>
                <p className="txt">При любом положении тела центр тяжести его находится в одной и той же точке.</p>
                <p className="utitletxt">Условия равновесия тел</p>
                <p className="txt">Раздел механики, изучающий условия равновесия тел, называется статикой.
                </p>
                <p className="txt">Равновесие, при котором выведенное из положения равновесия тело вновь к нему возвращается, называют <mark className="mrk">устойчивым</mark>.</p>
                <p className="txtb">При устойчивом равновесии центр тяжести тела расположен ниже оси вращения и находится на вертикальной прямой, проходящей через эту ось.</p>
                <p  className="txt">Равновесие, при котором выведенное из равновесия тело не возвращается в начальное положение, называют неустойчивым.</p>
                <p className="txtb">При неустойчивом равновесии центр тяжести тела расположен выше оси вращения и находится на вертикальной прямой, проходящей через эту ось.
                </p>
                <p className="txt">Равновесие называют <mark className="mrk">безразличным</mark>, если при отклонении или перемещении тела оно остаётся в равновесии.</p>
                <p className="txtb">При безразличном равновесии ось вращения тела проходит через его центр тяжести, при этом центр тяжести тела остаётся на одном и том же уровне при любых положениях тела.</p>
                <p  className="txt">Равновесие, при котором выведенное из равновесия тело не возвращается в начальное положение, называют неустойчивым.</p>
                <video width="100%" loop="true" autoPlay="autoplay" muted>
                    <source src={require('../photo/15.mp4')} type="video/mp4"/>
                </video>
                <p className="txtbn">Устойчивое</p>
                <video width="100%" loop="true" autoPlay="autoplay" muted>
                    <source src={require('../photo/16.mp4')} type="video/mp4"/>
                </video>
                <p className="txtbn">Неустойчивое</p>
            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default BodyBalance;