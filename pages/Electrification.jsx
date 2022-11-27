import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const Electrification = () => {
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
    var name = "Electrification";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Электризация тел. Их взаимодействие</h1>
            <div className="centercontent">
                <p className="txt">Ещё в глубокой древности люди заметили, что янтарь,
                    потёртый о шерсть, приобретает способность притягивать к себе различные тела: соломинки, пушинки, ворсинки меха и т. д.</p>
                <p className="txt">Наблюдаемое явление в начале XVII в. было названо <mark className="mrk">электрическими</mark> (от греч. электрон — янтарь).
                    Стали говорить, что тело, получившее после натирания способность притягивать другие тела, наэлектризовано или что ему сообщён электрический заряд.</p>
                <p className="txtb">Итак, электризация тел происходит при их соприкосновении.
                </p>
               
                <p className="txt">На явлении электризации тел при соприкосновении основан принцип работы ксероксов. На явлении электризации основан принцип работы электрических фильтров,
                    очищающих воздух от пыли и дыма. При окрашивании предметов применяется электризация частицы краски при её распылении, что позволяет добиться
                    более ровного и прочного нанесения краски на предмет.</p>
                <p className="txtb">наэлектризованные тела или притягиваются друг к другу, или отталкиваются.</p>
                <p className="txtb">Также тела, имеющие электрические заряды одинакового знака, взаимно отталкиваются, а тела, имеющие заряды противоположного знака, взаимно притягиваются.</p>
            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default Electrification;