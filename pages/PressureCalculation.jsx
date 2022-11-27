import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";

const  PressureCalculation = () => {
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
    var name = "PressureCalculation";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Расчёт давления жидкости</h1>
            <div className="centercontent">
                <p className="txt">Рассмотрим, как можно рассчитать давление жидкости на дно и стенки сосуда.</p>
                <p className="txt">Сила <mark className="mrk">F</mark>, с которой жидкость, налитая в этот сосуд, давит на его дно, равна
                    весу <mark className="mrk">Р</mark> жидкости, находящейся в сосуде. Вес жидкости можно определить, зная её массу <mark className="mrk">m</mark>. Массу,
                    как известно, можно вычислить по формуле <mark className="mrk">m = ρV</mark>. Объём жидкости, налитой в выбранный нами сосуд,
                    легко рассчитать. Если высоту столба жидкости, находящейся в сосуде, обозначить буквой <mark className="mrk">h</mark>, а
                    площадь дна сосуда <mark className="mrk">S</mark>, то <mark className="mrk">V=Sh</mark>.</p>
                <p className="txt"> Масса жидкости <mark className="mrk">m = ρV</mark>, или <mark className="mrk">m = ρSh</mark>.</p>
                <p className="txt">Вес этой жидкости <mark className="mrk">Р = gm</mark>, или <mark className="mrk">Р = gρSh</mark>.</p>
                <p className="txt">Так как вес столба жидкости равен силе, с которой жидкость давит на дно сосуда, то,
                    разделив вес <mark className="mrk">Р</mark> на площадь <mark className="mrk">S</mark>, получим давление жидкости <mark className="mrk">р</mark>:</p>
                <MathComponent texExpression={`p=g*\\rho * h`}/>
                <p className="txt">Мы получили формулу для расчёта давления жидкости на дно сосуда. Из этой формулы видно, что <mark className="mrk">давление жидкости на дно сосуда зависит только от плотности и высоты столба жидкости</mark>.</p>
                <p className="utitletxt">Задачи:</p>
                <TaskFC EI={"Па"} D={"h=10м; p=800кг/м3"} N1={"p-?"} R={"p=gph; p=10(H)*800(кг/м3)*10(м)=80000Па;"} O={"80000"} Y={"Определите давление нефти на дно цистерны, если высота столба нефти 10 м, плотность 800 кг/м3."}  ide={name + i[0]}/>
            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default PressureCalculation;