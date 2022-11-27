import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const Resistance = () => {
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
    var name = "Resistance";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Электрическое сопротивление</h1>
            <div className="centercontent">
                <p className="txt">Электрическое сопротивление — физическая величина. Обозначается оно буквой <mark className="mrk">R</mark>.</p>
                <p className="txtb">За единицу сопротивления принимают 1 ом — сопротивление такого проводника, в котором при напряжении на концах 1 вольт сила тока равна 1 амперу. </p>
                <p className="txt">В чём причина сопротивления? Если бы электроны в проводнике не испытывали никаких помех в своём движении, то они, будучи приведены в упорядоченное движение, двигались бы по инерции неограниченно долго. В действительности электроны взаимодействуют с ионами кристаллической решётки металла. При этом замедляется упорядоченное движение электронов и сквозь поперечное сечение проводника проходит за 1 с меньшее их число. Соответственно уменьшается и переносимый электронами за 1 с заряд, т. е. уменьшается сила тока. Таким образом, каждый проводник как бы противодействует электрическому току, оказывает ему сопротивление.
                </p>
                <p className="txt">Причиной сопротивления является взаимодействие движущихся электронов с ионами кристаллической решётки.
                </p>
                <p className="utitletxt">Закон Ома для участка цепи</p>
                <p className="txt">Зависимость силы тока от напряжения на концах участка цепи и сопротивления этого участка называется <mark className="mrk">законом Ома</mark> по имени немецкого учёного <mark className="mrk">Георга Ома</mark>, открывшего этот закон в 1827 г.</p>
                <p className="txtb">Закон Ома читается так: сила тока в участке цепи прямо пропорциональна напряжению на концах этого участка и обратно пропорциональна его сопротивлению.</p>
                <MathComponent texExpression={`I=\\frac{U}{R}`}/>
                <p className="txt">здесь <mark className="mrk">I</mark> — сила тока в участке цепи, <mark className="mrk">U</mark> — напряжение на этом участке, <mark className="mrk">R</mark> — сопротивление участка.</p>
                <p className="txt">Следовательно, зная силу тока и сопротивление, можно по закону Ома вычислить напряжение на участке цепи, а зная напряжение и силу тока — сопротивление участка.
                </p>
            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default Resistance;