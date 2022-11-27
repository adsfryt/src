import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const Electricity = () => {
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
    var name = "Electricity";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Электрический ток</h1>
            <div className="centercontent">
                <p className="txtb">Электрическим током называется упорядоченное (направленное) движение заряженных частиц.</p>
                <p className="txt"><mark className="mrk">Чтобы получить электрический ток в проводнике, надо создать в нём электрическое поле</mark>. Под
                    действием этого поля заряженные частицы, которые могут свободно перемещаться в проводнике, придут в движение в направлении действия на них электрических сил. Возникнет электрический ток.</p>
                <p className="txt">Источники тока бывают различные, но во всяком из них совершается работа по разделению <mark className="mrk">положительно</mark> и <mark className="mrk">отрицательно</mark>заряженных частиц.
                    Разделённые частицы накапливаются на полюсах источника тока. Так называют места, к которым с помощью клемм или зажимов подсоединяют проводники.
                    Один полюс источника тока заряжается положительно, другой — отрицательно. Если полюсы источника соединить проводником, то под действием
                    электрического поля свободные заряженные частицы в проводнике начнут двигаться в определённом направлении, возникнет электрический ток.
                </p>
                <p className="utitletxt">Электрический ток в металлах</p>
                <p className="txt">В узлах кристаллической решётки металлов расположены <mark className="mrk">положительные ионы</mark>, а в пространстве между ними движутся <mark className="mrk">свободные электроны</mark>.
                Свободные электроны не связаны с ядрами своих атомов.</p>
                <p className="txt">В них свободные электроны в нём движутся беспорядочно. Но если в металле создать электрическое поле, то
                    свободные электроны начнут двигаться направленно под действием электрических сил.</p>
                <p className="txt">Скорость движения самих электронов в проводнике под действием электрического поля невелика — несколько миллиметров в секунду,
                    а иногда и ещё меньше. Но как только в проводнике возникает электрическое поле, оно с огромной скоростью, близкой к скорости света в вакууме <mark className="mrk">(300 000 км/с)</mark>, распространяется по всей длине проводника.</p>
            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default Electricity;