import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";

const Velocity = () => {
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
    var name = "Velocity";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Скорость</h1><div className="centercontent">
            <p className="txt">В физике величиной, характеризующей быстроту движения тел, является <mark className="mrk">скорость</mark>.</p>
            <p className="txt">Предположим, что человек за 1 ч проходит 5 км, автомобиль 90 км, а самолёт пролетает 850 км. Тогда говорят, что скорость
                туриста 5 км в час, скорость автомобиля 90 км в час, а скорость самолёта 850 км в час.</p>
            <p className="txtb">
                Скорость при равномерном движении тела показывает, какой путь оно прошло в единицу времени.</p>
            <video width="100%"loop="true" autoplay="autoplay" muted>
                <source src={require('../photo/1.mp4')} type="video/mp4"/>
            </video>
            <p className="txt">
                При равномерном движении скорость тела остаётся <mark className="mrk">постоянной</mark>.
            </p>
            <p className="txtb">Чтобы определить скорость при равномерном движении, надо путь, пройденный телом за какой-то промежуток времени,
                разделить на этот промежуток времени.</p>
            <MathComponent texExpression={`v=\\frac{s}{t}`}/>
            <p className="txt">Скорость обозначают буквой <mark className="mrk">υ</mark>, путь — <mark className="mrk">s</mark>, время — <mark className="mrk">t</mark>.</p>
            <p  className="txtb">Скорость тела при равномерном движении — это величина, равная отношению пути ко времени, за которое этот путь пройден.</p>
            <p  className="txt">В Международной системе (СИ) скорость измеряют в метрах в секунду <mark className="mrk">(м/с)</mark>.</p>
            <Task D={"v=36км/ч; t=0,5ч"} N1={"s-? "} R={"S = v*t; S = 36км/ч * 0,5ч = 18км "} O={"18км"} Y={"Ласточка летит со скоростью 36 км/ч. Какой путь она преодолеет за 0,5 ч?"}/>
            <p className="txt">Величины, которые, кроме числового значения (модуля), имеют ещё и направление, называют <mark className="mrk">векторными</mark>.</p>
            <p className="txtb">Скорость — это векторная физическая величина.</p>
            <p className="txt">Все векторные величины обозначают соответствующими буквами со стрелочкой. <Math texExpression={"\\vec{v}"}/> Например, скорость обозначается буквой
                со стрелочкой, а её значение — модуль скорости той же буквой, но без стрелочки.</p>
            <p className="txt">Все векторные величины обозначают соответствующими буквами со стрелочкой. Например, скорость обозначается буквой
                со стрелочкой, а её значение — модуль скорости той же буквой, но без стрелочки.</p>
            <p className="txt">Некоторые физические величины не имеют направления. Они характеризуются только числовым значением.
                Это путь, время, объём, длина и др. Они являются <mark className="mrk">скалярными величинами</mark>.</p>
            <p className="txt">Для характеристики неравномерного движения тела вводят понятие <mark className="mrk">средней скорости</mark>.</p>
            <p className="txt">Чтобы определить среднюю скорость тела при неравномерном движении, надо <mark className="mrk">весь пройденный путь</mark>
                разделить на <mark className="mrk">всё время</mark> движения.</p>
            <p className="utitletxt">Задачи:</p>
            <TaskFC EI={"км/ч"} D={"s=36км; t=30мин"} N1={"v-?"} R={"v=s/t; v = 36000м/1800c = 20м/с"} O={"20"} Y={"Какова скорость автомобиля, если за 30 мин он проехал 36 км?"} S={"lg"} ide={name + i[0]}/>
            <TaskFC EI={"c"} D={"v=13м/ч; s=2,6км"} N1={"t-?"} R={"t=s/v; t = 2600м/13км/ч = 200с"} O={"200"} Y={"Конькобежец может развивать скорость до 13 м/с. За какое время он пробежит дистанцию длиной 2,6 км?"} S={"lg"} ide={name + i[1]}/>
        </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default Velocity;