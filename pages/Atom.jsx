import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const Atom = () => {
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
    var name = "Atom";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Строение атомов</h1>
            <div className="centercontent">
                <p className="txt">Атомы разных элементов в обычном состоянии отличаются друг от друга числом электронов, движущихся
                    вокруг ядра. Так, в атоме водорода вокруг ядра движется один электрон, в атоме гелия — два электрона.
                    Есть атомы с тремя, четырьмя электронами и т. д. </p>
                <p className="txt">Но главной характеристикой данного химического элемента является не число электронов, а <mark className="mrk">заряд ядра</mark>.</p>
                <p className="txt">Так как заряд ядра равен по абсолютному значению общему заряду электронов атома, можно предположить, что <mark className="mrk">в составе ядра находятся положительно заряженные частицы</mark>. Их назвали <mark className="mrk">протонами</mark>.
                </p>
                <p className="txt">Дальнейшее изучение состава ядра позволило предположить, что, кроме протонов, в ядрах атомов содержатся ещё <mark className="mrk">нейтральные
                    (не имеющие заряда) частицы</mark>. Они получили название <mark className="mrk">нейтронов</mark>.</p>
                <p className="txt">Итак, строение атома таково: в центре атома находится ядро, состоящее из протонов и нейтронов, а вокруг ядра движутся электроны.</p>
                <img width="40%" src={require('../photo/13.png')}/>
                <p className="txtbn">Строение атома</p>
                <p className="txtb">Напомним, что атом в целом не имеет заряда, он <mark className="mrk">нейтрален</mark>, потому что положительный заряд его ядра равен отрицательному заряду всех его электронов.</p>
                <p className="txt">Но атом, потерявший один или несколько электронов, уже не является нейтральным, а будет иметь положительный заряд. Его называют тогда <mark className="mrk">положительным ионом</mark>.</p>
                <p className="txt">Наблюдается и обратное. Лишний электрон присоединяется к нейтральному атому. В этом случае атом приобретает отрицательный заряд и становится <mark className="mrk">отрицательным ионом</mark>.
                </p>
            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default Atom;