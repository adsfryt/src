import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const InternalEnergy = () => {
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
    var name = "InternalEnergy";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Внутренняя энергия</h1>
            <div className="centercontent">
                <p className="txtb">Кинетическая энергия всех молекул, из которых состоит тело, и потенциальная энергия их взаимодействия составляют внутреннюю энергию тела.</p>
                <p className="txt">Итак, кроме механической энергии, существует ещё один вид энергии. Это внутренняя энергия <mark className="mrk">внутренняя энергия</mark> тела.</p>
                <p className="txt">Внутренняя энергия зависит от температуры тела, агрегатного состояния вещества и других факторов.</p>
                <p className="txt">Поднимем тело, например мяч, над столом. При этом расстояние между молекулами мяча не меняется.
                    Значит, не меняется и потенциальная энергия взаимодействия молекул. Следовательно, поднимая мяч, мы не изменяем его внутреннюю энергию.
                    Будем двигать мяч относительно стола. От этого его внутренняя энергия также не изменится.
                </p>
                <p className="txtb">Следовательно, внутренняя энергия тела не зависит ни от механического движения тела, ни от положения этого тела относительно других тел.</p>
                <p className="txt">Кинетическая и потенциальная энергия одной молекулы — очень маленькая величина, ведь масса молекулы мала.
                    Поскольку в теле содержится множество молекул, то внутренняя энергия тела, равная сумме энергий всех молекул, достаточно велика.</p>
            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default InternalEnergy;