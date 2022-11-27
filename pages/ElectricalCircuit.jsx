import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const ElectricalCircuit = () => {
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
    var name = "ElectricalCircuit";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Электрическая цепь</h1>
            <div className="centercontent">
                <p className="utitletxt">Электрическая цепь</p>
                <p className="txt">Для того чтобы использовать энергию электрического тока, нужно прежде всего иметь <mark className="mrk">источник тока</mark>.</p>
                <p className="txt">Электродвигатели, лампы, плитки, всевозможные электробытовые приборы называют <mark className="mrk">приёмниками</mark> или <mark className="mrk">потребителями электрической энергии</mark>.</p>
                <p className="txt">Чтобы включать и выключать в нужное время приёмники электрической энергии, применяют <mark className="mrk">ключи, рубильники, кнопки, выключатели</mark>, т. е. замыкающие и размыкающие устройства.
                </p>

                <p className="txt">Источник тока, приёмники, замыкающие устройства, соединённые между собой проводами, составляют простейшую электрическую цепь.</p>

                <p className="txt">Чтобы в цепи был ток, она должна быть <mark className="mrk">замкнутой</mark>, т. е. состоять только из проводников электричества. Если в каком-нибудь месте провод оборвётся, то ток в цепи прекратится.</p>
                <p className="txtb">Чертежи, на которых изображены способы соединения электрических приборов в цепь, называют <mark className="mrk">схемами</mark>. Приборы на схемах обозначают условными знаками.</p>

                <p className="utitletxt">Виды соединений проводников</p>
                <p className="txt">Электрические цепи, с которыми приходится иметь дело на практике, обычно состоят не
                    из одного приёмника электрического тока, а из нескольких различных, которые могут быть соединены между собой по-разному.</p>

            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default ElectricalCircuit;