import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const Block = () => {
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
    var name = "Block";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Блок</h1>
            <div className="centercontent">
                <p className="txt">Блок представляет собой колесо с жёлобом, укрепленное в обойме. По жёлобу блока пропускают верёвку,трос или цепь.</p>

                <p className="txt"><mark className="mrk">Неподвижным блоком</mark> называют такой блок, ось которого закреплена и при подъёме грузов не поднимается и не опускается.</p>
                <p className="txtb">
                    Неподвижный блок можно рассматривать как равноплечий рычаг, у которого плечи сил равны радиусу колеса: ОА = ОВ = r. Такой блок не даёт выигрыша в силе (F1 = F2), но позволяет изменять направление действия силы.</p>
                <img width="30%" src={require('../photo/10.png')}/>
                <p className="txt">
                    Подвижный блок — это блок, ось которого поднимается и опускается вместе с грузом.На схеме показан
                    соответствующий ему рычаг: О — точка опоры рычага, ОА — плечо силы Р и ОB — плечо силы F. Так как плечо ОB в 2 раза больше плеча ОА, то сила F в 2 раза меньше силы Р
                </p>
                <img width="30%" src={require('../photo/11.png')}/>
                <p className="txt">Таким образом, <mark className="mrk">подвижный блок даёт выигрыш в силе в 2 раза</mark>.</p>
            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default Block;