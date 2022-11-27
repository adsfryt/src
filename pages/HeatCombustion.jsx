import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const HeatCombustion = () => {
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
    var name = "HeatCombustion";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Удельная теплота сгорания</h1>
            <div className="centercontent">
                <p className="txt">Известно, что источником энергии, которая используется в промышленности, на транспорте,
                    в сельском хозяйстве, в быту, является топливо. Это уголь, нефть, торф, дрова, природный газ и др. При сгорании топлива выделяется энергия.</p>
                <p className="txt">Использование топлива основано на явлении выделения энергии при соединении атомов.
                    Так, например, атомы углерода, содержащиеся в топливе, при горении соединяются с двумя атомами кислорода.
                    При этом образуется молекула оксида углерода — углекислого газа — и выделяется энергия.</p>
                <p className="txtb">Физическая величина, показывающая, какое количество теплоты выделяется при полном сгорании топлива массой 1 кг, называется удельной теплотой сгорания топлива.</p>
                <p className="txt">Удельная теплота сгорания обозначается буквой <mark className="mrk">q</mark>. Единицей удельной теплоты сгорания является 1 <mark className="mrk">Дж/кг</mark>.
                </p>

                <p className="txt">Общее количество теплоты <mark className="mrk">Q</mark>, выделяемое при сгорании <mark className="mrk">m</mark> кг топлива, вычисляется по формуле</p>
                <MathComponent texExpression={`Q=m*q`}/>
                <p className="txt">Переход вещества из жидкого состояния в твёрдое называют отвердеванием или кристаллизацией.</p>
            </div>


            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default HeatCombustion;