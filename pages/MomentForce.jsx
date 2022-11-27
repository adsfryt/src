import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const MomentForce = () => {
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
    var name = "MomentForce";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Момент силы</h1>
            <div className="centercontent">
                <p className="txt">Вам уже известно правило равновесия рычага:</p>
                <MathComponent texExpression={`\\frac{l_{1}}{l_{2}}=\\frac{F_{1}}{F_{2}}`}/>
                <p className="txt">Пользуясь свойством пропорции (произведение её крайних членов равно произведению средних членов), запишем его в таком виде:</p>
                <MathComponent texExpression={`F_{1}*l_{1}=F_{2}*l_{2}`}/>
                <p className="txt">В левой части равенства стоит произведение силы F1 на её плечо l1, а в правой — произведение силы F2 на её плечо l2.</p>
                <p className="txt">Произведение модуля силы, вращающей тело, на её плечо называется <mark className="mrk">моментом силы</mark>. Он обозначается буквой <mark className="mrk">М</mark>.
                </p>
                <MathComponent texExpression={`M=F*l`}/>
                <p className="txtb">Рычаг находится в равновесии под действием двух сил, если момент силы, вращающей его по ходу часовой стрелки, равен моменту силы, вращающей его против хода часовой стрелки.</p>
                <p className="txt">Это правило, называемое правилом моментов, можно записать в виде формулы:</p>
                <MathComponent texExpression={`M_{1}=M_{2}`}/>
                <p  className="txt">Момент силы, как и всякая физическая величина, может быть измерен. За единицу момента силы принимается момент силы в 1 Н, плечо которой равно 1 м.</p>
                <p className="txt">Момент силы характеризует действие силы и показывает, что оно зависит одновременно и от модуля силы, и от её плеча. Действительно, мы уже знаем,
                    например, что действие силы на дверь зависит и от модуля силы, и от того, где приложена сила. Дверь тем легче повернуть, чем дальше от оси вращения приложена действующая на неё сила.</p>
            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default MomentForce;