import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const Energy = () => {
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
    var name = "Energy";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Энергия</h1>
            <div className="centercontent">
                <p className="txt">Слово «энергия» употребляется нередко и в быту. Так, например, людей, которые могут
                    быстро выполнять большую работу, называют энергичными, обладающими большой энергией. Что же
                    такое энергия? Чтобы ответить на этот вопрос, рассмотрим примеры.</p>
                <p className="txt">Сжатая пружина, распрямляясь, может совершить работу, например поднять на высоту груз или заставить двигаться тележку.</p>
                <p className="txt">Поднятый над землёй неподвижный груз не совершает работы, но если этот груз упадёт, то он совершит работу.</p>
                <p className="txt">Способностью совершить работу обладает и всякое движущееся тело. Так, скатившийся с наклонной плоскости стальной
                    шарик, ударившись о деревянный брусок, передвигает его на некоторое расстояние.
                </p>
                <p className="txtb">Энергия — физическая величина, показывающая, какую работу может совершить тело (или несколько тел). Энергию выражают в СИ в тех же единицах, что и работу, т. е. в джоулях.</p>
                <p className="txt">Чем большую работу может совершить тело, тем большей энергией оно обладает.</p>
            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default Energy;