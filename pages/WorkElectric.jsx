import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const WorkElectric = () => {
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
    var name = "WorkElectric";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Работа электрического тока</h1>
            <div className="centercontent">
                <p className="txt">Как вычислить работу электрического тока? Мы уже знаем, что напряжение на концах участка цепи
                    численно равно работе, которая совершается при прохождении по этому участку электрического заряда в 1 Кл. При
                    прохождезаряда, равного не 1 Кл, а, например, 5 Кл, совершённая работа будет в 5 раз больше. Таким образом,
                    чтобы определить работу электрического тока на каком-либо участке цепи, надо напряжение на концах этого участка
                    цепи у множить на электрический заряд (количество электричества), прошедший по нему:</p>
                <MathComponent texExpression={`A=U * q`}/>
                <p className="txt">где <mark className="mrk">А</mark> — работа, <mark className="mrk">U</mark> — напряжение, <mark className="mrk">q</mark> — электрический заряд.</p>
                <p className="txt">Электрический заряд, прошедший по участку цепи, можно определить, измерив силу тока и время его прохождения:
                </p>
                <MathComponent texExpression={`q=I*t`}/>
                <p className="txtb">Работа электрического тока на участке цепи равна произведению напряжения на концах этого участка на силу тока и на время, в течение которого совершалась работа.</p>
                <p className="txt">Следовательно, из этих уравнений можно вывести две другие</p>
                <MathComponent texExpression={`A=I^{2}*U*t`}/>
                <MathComponent texExpression={`A=\\frac{U^{2}}{R}*t`}/>
                <p className="txt">Следовательно, при температуре плавления внутренняя энергия вещества в жидком состоянии больше внутренней энергии такой же массы вещества в твёрдом состоянии.</p>
                <p className="txtb">Переход вещества из жидкого состояния в твёрдое называют отвердеванием или кристаллизацией.</p>
                <p className="txt">Чтобы началась кристаллизация расплавленного тела, оно должно остыть до определённой температуры.</p>
                <p className="txtb">Температура, при которой вещество отвердевает (кристаллизуется), называют температурой отвердевания или кристаллизации.</p>
                <p className="txt">Опыт показывает, что <mark className="mrk">вещества отвердевают при той же температуре, при которой плавятся</mark>.
                </p>
                <p className="utitletxt">Задачи:</p>
                <TaskFC EI={"Па"} D={"m=45кг; S=300cм2"} N1={"p-?"} R={"p=F/S; F=P; P=mg; P=10*45=450Н; p=450/0,03=15000Па;"} O={"15000"} Y={"Рассчитать давление, производимое на пол мальчиком, масса которого 45 кг, а площадь подошв его ботинок, соприкасающихся с полом, равна 300 см2."}  ide={name + i[0]}/>
            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default WorkElectric;