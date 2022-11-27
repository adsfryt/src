import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const SubmergedBody = () => {
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
    var name = "SubmergedBody";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Архимедова сила</h1>
            <div className="centercontent">
                <p className="txt">Под водой мы можем легко поднять камень, который с трудом поднимаем в воздухе. Если
                    погрузить бревно под воду и выпустить её из рук, то она всплывёт. Как можно объяснить эти явления?</p>
                <img width="50%" src={require('../photo/5.png')}/>
                <p className="txt">Силу, выталкивающую тело из жидкости или газа, называют архимедовой силой в честь
                    древнегреческого учёного Архимеда, который впервые указал на её существование и рассчитал её значение.</p>
                <p className="txt">архимедова (или выталкивающая) сила равна весу жидкости в объёме тела, т. е. F<sub>А</sub> = Р<sub>ж</sub> = gm<sub>ж</sub>. Массу
                    жидкости mж, вытесняемую телом, можно выразить через её плотность (ρ<sub>ж</sub>) и объём тела (V<sub>т</sub>), погружённого в жидкость</p>
                <MathComponent texExpression={`F_{A}=g*\\rho _{ж} * V_{T}`}/>
                <p className="txt">Следовательно, архимедова сила зависит от плотности жидкости, в которую погружено тело, и от объёма этого тела.
                    Но она не зависит, например, от плотности вещества тела, погружаемого в жидкость, так как эта величина не входит в полученную формулу.
                </p>
                <p className="txt">Определим теперь вес тела, погружённого в жидкость (или в газ). Так как две силы, действующие на тело в этом случае,
                    направлены в противоположные стороны (сила тяжести вниз, а архимедова сила вверх), то вес тела в жидкости P<sub>1</sub> будет меньше
                    веса тела в вакууме Р = gm (m — масса тела) на архимедову силу.</p>
                <p className="txtb">Если тело погружено в жидкость (или газ), то оно теряет в своём весе столько, сколько весит вытесненная им жидкость (или газ).</p>
                <p className="utitletxt">Задачи:</p>
                <TaskFC EI={"Н"} D={"V=1,6м3; p=1030кг/м3; g=10H/кг;"} N1={"Fа-?"} R={"Fa=gpV; Fa=10*1030*1,6=16480Н;"} O={"16480"} Y={"Определите выталкивающую силу, действующую на камень объёмом 1,6 м3 в морской воде."}  ide={name + i[0]}/>
            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default SubmergedBody;