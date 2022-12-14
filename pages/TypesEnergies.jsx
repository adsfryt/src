import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const TypesEnergies = () => {
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
    var name = "TypesEnergies";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Потенциальная и кинетическая энергия</h1>
            <div className="centercontent">
                <p className="utitletxt">Потенциальная энергия</p>
                <p className="txtb">Потенциальной энергией называется энергия, которая определяется взаимным
                    положением взаимодействующих тел или частей одного и того же тела.</p>
                <p className="txt">Потенциальной энергией, например, обладает тело, поднятое относительно поверхности Земли,
                    потому что энергия тела зависит от взаимного положения его и Земли и их взаимного притяжения. Если считать
                    потенциальную энергию тела, лежащего на Земле, равной нулю, то потенциальная энергия тела, поднятого на
                    некоторую высоту, определится работой, которую совершит сила тяжести при падении тела на Землю. Обозначается
                    потенциальная энергия тела Е<sub>п</sub>. Поскольку Е<sub>п</sub> = А, а работа, как мы знаем, равна произведению силы на путь, то
                    А = Fh, где F — сила тяжести.</p>
                <MathComponent texExpression={`E_{п}=m*g*h`}/>
                <p className="txt">
                    где g — ускорение свободного падения, m — масса тела, h — высота, на которую поднято тело.</p>
                <p className="txt">
                    Энергию сжатых и закрученных пружин используют, например, в механических часах, некоторых заводных игрушках и пр.
                </p>
                <p className="txt">Энергию сжатых и закрученных пружин используют, например, в механических часах, некоторых заводных игрушках и пр.</p>
                <MathComponent texExpression={`E_{п}=\\frac{k*\\Delta x^{2}}{2}`}/>
                <p className="txt">
                    где x — удлинение тела (изменение его длины), k — коэффициент пропорциональности, который называется жёсткостью.</p>
                <p className="utitletxt">Кинетическая энергия</p>
                <p className="txtb">Энергия, которой обладает тело вследствие своего движения, называется кинетической энергией.</p>
                <p  className="txt">Кинетическая энергия тела обозначается буквой Е<sub>к</sub>.</p>


                <p className="txt">Если скатывать шарик с разных высот, то можно заметить, что чем с большей высоты скатывается шарик,
                    тем больше его скорость и тем дальше он передвигает брусок, т. е. совершает большую работу. Значит, кинетическая энергия тела зависит от его <mark className="mrk">скорости</mark>.</p>
                <p className="txt">За счёт того, что скорость летящей пули велика, она обладает большой кинетической энергией.
                </p>
                <p className="txt">Кинетическая энергия тела зависит и от его массы. Ещё раз обратимся к прошлому опыту, но будем скатывать с наклонной плоскости другой шарик — большей массы. Второй брусок передвинется дальше, т. е. будет совершена большая работа. Значит, и кинетическая энергия второго шарика больше, чем первого.</p>

                <p className="txtb">Чем больше масса тела и скорость, с которой оно движется, тем больше его кинетическая энергия.</p>
                <p  className="txt">Для того чтобы определить кинетическую энергию тела, применяют формулу:</p>
                <MathComponent texExpression={`E=\\frac{m v^{2}}{2}`}/>
                <p className="txt">где m — масса тела, v — скорость движения тела.</p>
                <p className="txt">Кинетическую энергию тел используют в технике. Например, на мощных гидроэлектростанциях за счёт кинетической энергии воды получают электрическую энергию. Удерживаемая плотиной вода обладает, как было уже сказано, большой потенциальной энергией. При падении с плотины вода движется и имеет такую же большую кинетическую энергию. Она приводит в движение турбину, соединённую с генератором электрического тока.
                </p>
                <p className="txt">
                    Все тела в природе обладают либо потенциальной, либо кинетической энергией, а иногда той и другой вместе. Например, летящий самолёт обладает и кинетической, и потенциальной энергией.
                </p>
                <p className="utitletxt">Полная энергия</p>
                <p className="txt">Полная механическая энергия тела равна сумме его кинетической и потенциальной энергии.</p>
                <p className="txt">Полную механическую энергию рассматривают в тех случаях, когда действует закон сохранения энергии и она остаётся постоянной.
                </p>
                <p className="txt">
                    Если на движение тела не оказывают влияния внешние силы, например, нет взаимодействия с другими телами, нет силы
                    трения или силы сопротивления движению, тогда полная механическая энергия тела остаётся неизменной во времени.
                </p>
                <MathComponent texExpression={`E_{пол}=E_{п}+E_{к}=const`}/>
            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default TypesEnergies;