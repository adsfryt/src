import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const DirectionElectricCurrent = () => {
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
    var name = "DirectionElectricCurrent";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Направление электрического тока</h1>
            <div className="centercontent">
                <p className="txt">Мы знаем, что электрический ток есть упорядоченное движение заряженных частиц в проводнике.
                    В металлических проводниках электрический ток представляет собой упорядоченное движение электронов — частиц,
                    обладающих отрицательным зарядом. В растворах кислот, солей, щелочей электрический ток обусловлен движением ионов обоих знаков.</p>
                <p className="txt">За направление тока условно приняли то направление, по которому движутся в
                    проводнике положительные заряды, т. е. направление от положительного полюса источника тока к отрицательному.</p>
            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default DirectionElectricCurrent;