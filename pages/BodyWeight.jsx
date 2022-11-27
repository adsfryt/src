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


const BodyWeight =()=>{

    var name = "BodyWeight";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }

    return (
        <div className="qw">
            <h1 className="titletxt">Вес тела</h1>
            <div className="centercontent">
                <p className="txt">В повседневной жизни очень часто используется понятие «вес».</p>
                <p className="txt">Тело давит на опору с силой, которую называют весом тела.</p>
                <p className="txtb">Вес тела — это сила, с которой тело вследствие притяжения к Земле действует на опору или подвес.
                </p>
                {/*<MathComponent texExpression={`\\int_0^\\infty x^2 dx`} a ={8}/>*/}
                <p className="txt">Как и другие силы, вес — векторная физическая величина. Вес тела обозначается буквой:
                </p>
                <Math texExpression={"\\vec{P}"}/>
                <p className="txt">Вес тела, так же как сила тяжести, всегда направлен вниз. Однако следует помнить,
                    что сила тяжести приложена к телу, а вес — к опоре или подвесу.</p>
                <p className="txt">Если тело и опора неподвижны или движутся равномерно и прямолинейно, то вес тела по
                    своему числовому значению равен силе тяжести.</p>
                <p className="txt">Следует помнить, что сила тяжести возникает вследствие взаимодействия тела и Земли.</p>
                <p className="txtb">Вес тела возникает в результате взаимодействия тела и опоры (подвеса) вследствие взаимодействия
                    тела и Земли. Опора (подвес) и тело при этом деформируются, что приводит к появлению силы упругости.</p>
            </div>
            <App1 name={name}/>
        </div>
    );

};

export default BodyWeight;