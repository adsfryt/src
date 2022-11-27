import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const Melting = () => {
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
    var name = "Melting";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Плавление и отвердевание</h1>
            <div className="centercontent">
                <p className="txt">Мы знаем, что в кристаллах молекулы (или атомы) расположены в строгом порядке.
                    Однако и в кристаллах они находятся в тепловом движении. При нагревании тела средняя скорость
                    движения молекул возрастает. Следовательно, возрастает и их средняя кинетическая энергия и температура.
                    Вследствие этого <mark className="mrk">размах колебаний</mark> молекул увеличивается. Когда тело нагреется
                    до температуры плавления, то <mark className="mrk">нарушится порядок в расположении частиц в кристаллах.</mark> Кристаллы
                    теряют свою форму. Вещество плавится, переходя из твёрдого состояния в жидкое.</p>
                <p className="txt">Следовательно, вся энергия, которую получает кристаллическое тело после того, как оно уже нагрето до
                    температуры плавления, расходуется на разрушение кристалла. В связи с этим температура тела перестаёт повышаться.</p>
                <p className="txtb">Физическая величина, показывающая, какое количество теплоты необходимо сообщить кристаллическому
                    телу массой 1 кг, чтобы при температуре плавления полностью перевести его в жидкое состояние, называется удельной теплотой плавления.
                </p>
                <p className="txt">Удельную теплоту плавления обозначают <mark className="mrk">λ</mark> (греч. буква «лямбда»). Её единица — 1 <mark className="mrk">Дж/кг</mark>.</p>
                <MathComponent texExpression={`Q=λ*m`}/>
                <p className="txt">Следовательно, при температуре плавления внутренняя энергия вещества в жидком состоянии больше внутренней энергии такой же массы вещества в твёрдом состоянии.</p>
                <p className="txtb">Переход вещества из жидкого состояния в твёрдое называют отвердеванием или кристаллизацией.</p>
                <p className="txt">Чтобы началась кристаллизация расплавленного тела, оно должно остыть до определённой температуры.</p>
                <p className="txtb">Температура, при которой вещество отвердевает (кристаллизуется), называют температурой отвердевания или кристаллизации.</p>
                <p className="txt">Опыт показывает, что <mark className="mrk">вещества отвердевают при той же температуре, при которой плавятся</mark>.
                </p>
               </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default Melting;