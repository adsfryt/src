import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";

const Power = () => {
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
    var name = "Power";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Мощность</h1>
            <div className="centercontent">
                <p className="txt">На совершение одной и той же работы различным двигателям требуется разное время.
                    Например, подъёмный кран на стройке за несколько минут поднимает на верхний этаж здания сотни
                    кирпичей. Если бы эти кирпичи перетаскивал рабочий, то ему для этого потребовалось бы несколько часов.</p>
                <p className="txt">Ясно, что подъёмный кран ту же работу совершает быстрее, чем рабочий. Быстроту
                    выполнения работы характеризуют особой величиной, называемой <mark className="mrk">мощностью</mark>.</p>
                <p className="txtb">
                    Мощность равна отношению работы ко времени, за которое она была совершена.</p>
                <p className="txt">
                    Чтобы вычислить мощность, надо работу разделить на время, в течение которого совершена эта работа:
                </p>
                <MathComponent texExpression={`N=\\frac{A}{t}`}/>
                <p className="txt">где <mark className="mrk">N</mark> — мощность, <mark className="mrk">А</mark> — работа, <mark className="mrk">t</mark> — время выполнения работы.</p>
                <p className="txtb">За единицу мощности принимают такую мощность, при которой в 1 с совершается работа в 1 Дж.</p>
                <p  className="txt">Эту единицу называют <mark className="mrk">ваттом</mark> (Вт) в честь английского учёного Уатта.</p>
                <p  className="txt"> Мощность двигателя автомобиля часто указывают в лошадиных силах (л. с.):  1 л. с. = 735,5 Вт.</p>
                <Task D={"h=25м; V=120м3; p=1000кг/м3; t=60c; g=10Н/кг"} N1={"N-?"} R={"m=p*V; m=1000*120=120000кг; F=m*g; F=10*120000=1200000H; A=F*h; A=1200000*25=30000000Дж; N=A/t; N=30000000/60=500000Вт=500кВт"} O={"500кВт"} Y={"Найти мощность потока воды, протекающей через плотину, если высота падения воды 25 м, а расход её — 120 м3 в минуту."}/>
                <p className="txt">Мощность человека при нормальных условиях работы в среднем равна 70—80 Вт. Совершая прыжки, взбегая по лестнице, человек может развивать мощность до 730 Вт, а в отдельных случаях и большую.</p>
                <p className="txt">Зная мощность двигателя, можно рассчитать работу, совершаемую этим двигателем в течение какого-нибудь промежутка времени.</p>
                <MathComponent texExpression={`A=N*t`}/>
                <p className="txt">Чтобы вычислить работу, необходимо мощность умножить на время, в течение которого совершалась эта работа.</p>
                <p className="utitletxt">Задачи:</p>
                <TaskFC EI={"кДж"} D={"N=35Вт; t=600c;"} N1={"А-?"} R={"A=N*t; A=35*600=21000=21000Дж=21кДж;"} O={"21"} Y={"Двигатель комнатного вентилятора имеет мощность 35 Вт. Какую работу он совершает за 10 мин?"} S={"lg"} ide={name + i[0]}/>
            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default Power;