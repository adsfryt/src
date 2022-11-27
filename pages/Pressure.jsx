import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";

const Pressure = () => {
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
    var name = "Pressure";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Давление</h1>
            <div className="centercontent">
                <p className="txt">По рыхлому снегу человек идёт с большим трудом, глубоко проваливаясь при каждом шаге. Но, надев лыжи,
                    он может идти, почти не проваливаясь в него. Почему? На лыжах или без лыж человек действует на снег с одной
                    и той же силой, равной своему весу. Однако действие этой силы в обоих случаях различно, потому что различна площадь
                    поверхности, на которую давит человек с лыжами и без лыж.</p>
                <p className="txtb">Значит, результат действия силы зависит не только от её модуля, направления и точки приложения, но и
                    от площади той поверхности, перпендикулярно которой она действует.</p>
                <p className="txt">От того, какая сила действует на каждую единицу площади поверхности, зависит результат действия этой силы.</p>
                <p className="txtb">Величина, равная отношению силы, действующей перпендикулярно поверхности, к площади этой поверхности, называется давлением.
                </p>
                <p className="txtb">Чтобы определить давление, надо силу, действующую перпендикулярно поверхности, разделить на площадь поверхности.</p>
                <MathComponent texExpression={`p=\\frac{F}{S}`}/>
                <p className="txt">давление — <mark className="mrk">р</mark>, сила, действующая на поверхность, — <mark className="mrk">F</mark> и площадь
                    поверхности — <mark className="mrk">S</mark>. Тогда получим формулу</p>
                <p  className="txt">Понятно, что большая по значению сила, действующая на ту же площадь, будет производить большее давление.</p>
                <p  className="txt">Единица давления — ньютон на квадратный метр. В честь французского учёного ( <mark className="mrk">1H/м2 </mark>)  <mark className="mrk">Блеза Паскаля</mark> она называется паскалем ( <mark className="mrk">Па</mark>).</p>
                <p className="txtb">Определение 1 Па: За единицу давления принимается такое давление, которое производит сила в 1 Н, действующая на поверхность площадью 1 м2 перпендикулярно этой поверхности.</p>
                <p className="utitletxt">Задачи:</p>
                <TaskFC EI={"Па"} D={"m=45кг; S=300cм2"} N1={"p-?"} R={"p=F/S; F=P; P=mg; P=10*45=450Н; p=450/0,03=15000Па;"} O={"15000"} Y={"Рассчитать давление, производимое на пол мальчиком, масса которого 45 кг, а площадь подошв его ботинок, соприкасающихся с полом, равна 300 см2."}  ide={name + i[0]}/>
            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default Pressure;