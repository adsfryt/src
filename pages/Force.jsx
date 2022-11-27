import React, {Component, useEffect, useRef} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";

import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";
import TaskFC from "../TaskFC";
import TaskFCNA from "../TaskFCNA";
import TaskNC from "../TaskNC";
import Math from "../Math";


const Force =()=>{

    var name = "Force";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }

    return (
        <div className="qw">
            <h1 className="titletxt">Сила</h1>
            <div className="centercontent">
                <p className="txt">Каждый из нас постоянно встречается с различными случаями действия тел друг на друга.
                    В результате взаимодействия скорость движения какого-либо тела меняется. Вам уже известно, что
                    скорость тела меняется тем больше, чем меньше его масса.</p>
                <p className="txt">Толкая руками тележку, мы можем привести её в движение. Скорость тележки меняется
                    под действием руки человека.</p>
                <p className="txt">Действуя на пружину рукой, можно её сжать. Сначала в движение приходит конец пружины.
                    Затем движение передаётся остальным её частям. Сжатая пружина, распрямляясь, может, например,
                    привести в движение шарик
                </p>
                {/*<MathComponent texExpression={`\\int_0^\\infty x^2 dx`} a ={8}/>*/}
                <p className="txtb">Таким образом, скорость тела меняется при взаимодействии его с другими телами.
                </p>
                <p className="txt">Сила, действующая на тело, может не только изменить скорость всего тела, но и
                    отдельных его частей.</p>
                <p className="txt">Например, если надавить пальцами на ластик, то он сожмётся, изменит свою форму.
                    В таких случаях говорят, что тело <mark className="mrk">деформируется</mark>.</p>
                <p className="txtb">Деформацией называется любое изменение формы и размера тела.</p>
                <p className="txt">Сила является мерой взаимодействия тел. В результате действия силы тела изменяют
                    свою скорость или деформируются.</p>
                <p className="txt">Сила, как и скорость, является <mark className="mrk">векторной величиной</mark>. Она характеризуется не только
                    числовым значением, но и направлением. Силу измеряют в ньютонах <mark className="mrk">(Н)</mark>.
                    <Math texExpression={"\\vec{F}"}/></p>
                <p className="txt">А её модуль той же буквой F, но без стрелочки. </p>
                <p className="txt">Когда говорят о силе, важно указывать, к какой точке тела приложена действующая на него сила.</p>
                <p className="txtb">Результат действия силы на тело зависит от её модуля, направления и точки приложения.</p>
                </div>
            <App1 name={name}/>
        </div>
    );

};

export default Force;