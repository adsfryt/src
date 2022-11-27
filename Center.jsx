import React, {useEffect, useState} from 'react';

import {findDOMNode, render} from 'react-dom';
import './index.css';
import './style.css';
import {Route, Routes, Link, BrowserRouter} from "react-router-dom";

import anime from "./animejs/anime.es";
import "./fontawesome-free-6.1.2-web/css/all.min.css";
import DivCenter from "./DivCenter";
import  NotFound  from './pages/NotFound';
import  Layout  from './Layout';
import  Links  from './Links';
import Example from "./Example";
import App from "./App";

const Center = () => {
//
//
// const Center = () => {
   useEffect(() =>{
       // $('.feat-btn').click(function () {
       //     $('nav ul .feat-show').toggleClass("show");
       //     $('nav ul .first').toggleClass("rotate");
       // });
       // $('.feat-btn1').click(function () {
       //     $('nav ul .feat-show1').toggleClass("show1");
       //     $('nav ul .first1').toggleClass("rotate");
       // });
       const element = document.querySelector('.feat-btn');
       const element1 = document.querySelector('nav ul .feat-show');
       const element2 = document.querySelector('nav ul .first');
       element.addEventListener("click", function () {
           element1.classList.toggle("show");
           element2.classList.toggle("rotate");
       });
       const element3 = document.querySelector('.feat-btn1');
       const element4 = document.querySelector('nav ul .feat-show1');
       const element5 = document.querySelector('nav ul .first1');
       element3.addEventListener("click", function () {
           element4.classList.toggle("show1");
           element5.classList.toggle("rotate");
       }, false);

       const element6 = document.querySelector('.feat-btn2');
       const element7 = document.querySelector('nav ul .feat-show2');
       const element8 = document.querySelector('nav ul .first2');
       element6.addEventListener("click", function () {
           element7.classList.toggle("show2");
           element8.classList.toggle("rotate");

       }, false);
       const element9 = document.querySelector('.feat-btn3');
       const element10 = document.querySelector('nav ul .feat-show3');
       const element11 = document.querySelector('nav ul .first3');
       element9.addEventListener("click", function () {
           element10.classList.toggle("show3");
           element11.classList.toggle("rotate");
       }, false);

       const element12 = document.querySelector('.feat-btn4');
       const element13 = document.querySelector('nav ul .feat-show4');
       const element14 = document.querySelector('nav ul .first4');
       element12.addEventListener("click", function () {
           element13.classList.toggle("show4");
           element14.classList.toggle("rotate");
       }, false);



       var animation;
       animation = anime ({
           targets: '.qqw path',
           strokeDashoffset: [anime.setDashoffset, 0],
           easing: 'easeInOutSine',
           duration:  Math.random() * (1600 - 1400) + 1400,
           delay: function(el, i) { return i * 250 },
       });

   });
    const [mAct, setmAct] = useState(false);

        return (
            <div>
            <App />
            <div className="menu" onClick={() => setmAct(!mAct)}>
                <svg id="Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 224.09 176.64">
                    <rect className="cls5-1" width="224.09" height="29.2"/>
                    <rect className="cls5-1" y="73.72" width="224.09" height="29.2"/>
                    <rect className="cls5-1" y="147.45" width="224.09" height="29.2"/>
                </svg>
            </div>
            <div className="container">


            <div className= {mAct ? 'left' : 'left active'}>
                    <nav className="sidebar">
                        <ul>
                            <li>
                                <a href="#"  className="feat-btn">Взаимодействие тел
                                    <span className="fas fa-caret-down first"></span>
                                </a>
                                <ul className="feat-show">
                                    <Links/>
                                </ul>
                            </li>

                            <li>
                                <a href="#" className="feat-btn1">Давление
                                    <span className="fas fa-caret-down first1"></span>
                                </a>
                                <ul className="feat-show1">
                                    <li><Link to="/Pressure">Давление</Link></li>
                                    <li><Link to="/PressureGas">Давление газа</Link></li>
                                    <li><Link to="/PressureTransmission">Передача давления жидкостями и газами</Link></li>
                                    <li><Link to="/PressureCalculation">Расчёт давления жидкости</Link></li>
                                    <li><Link to="/SubmergedBody">Архимедова сила</Link></li>
                                    <li><Link to="/SwimmingBodies">Плавание тел</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="feat-btn2">Работа и мощность. Энергия
                                    <span className="fas fa-caret-down first2"></span>
                                </a>
                                <ul className="feat-show2">
                                    <li><Link to="/MechanicalWork">Механическая работа</Link></li>
                                    <li><Link to="/Power">Мощность</Link></li>
                                    <li><Link to="/LeverArm">Рычаг. Равновесие сил</Link></li>
                                    <li><Link to="/MomentForce">Момент силы</Link></li>
                                    <li><Link to="/Block">Блок</Link></li>
                                    <li><Link to="/BodyBalance">Условия равновесия тел</Link></li>
                                    <li><Link to="/Energy">Энергия</Link></li>
                                    <li><Link to="/TypesEnergies">Потенциальная и кинетическая энергия</Link></li>
                                    <li><Link to="/ConvertEnergy">Превращение одного вида энергии в другой</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="feat-btn3">Тепловые явления
                                    <span className="fas fa-caret-down first3"></span>
                                </a>
                                <ul className="feat-show3">
                                    <li><Link to="/Temperature">Температура</Link></li>
                                    <li><Link to="/InternalEnergy">Внутренняя энергия</Link></li>
                                    <li><Link to="/ThermalConductivity">Теплопроводность</Link></li>
                                    <li><Link to="/Convection">Конвекция</Link></li>
                                    <li><Link to="/Radiation">Излучение</Link></li>
                                    <li><Link to="/SpecificHeat">Теплота. Удельная теплоёмкость</Link></li>
                                    <li><Link to="/HeatCombustion">Удельная теплота сгорания</Link></li>
                                    <li><Link to="/Melting">Плавление и отвердевание</Link></li>
                                    <li><Link to="/Evaporation">Испарение и кипение</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="feat-btn4"> Электрические явления
                                    <span className="fas fa-caret-down first4"></span>
                                </a>
                                <ul className="feat-show4">
                                    <li><Link to="/Electrification">Электризация тел. Их взаимодействие</Link></li>
                                    <li><Link to="/ElectricField">Электрическое поле</Link></li>
                                    <li><Link to="/Atom">Строение атомов</Link></li>
                                    <li><Link to="/ElectricalCircuit">Электрическая цепь</Link></li>
                                    <li><Link to="/Electricity">Электрический ток</Link></li>
                                    <li><Link to="/DirectionElectricCurrent">Направление электрического тока</Link></li>
                                    <li><Link to="/CurrentStrength">Сила тока</Link></li>
                                    <li><Link to="/Voltage">Электрическое напряжение</Link></li>
                                    <li><Link to="/Resistance">Электрическое сопротивление</Link></li>
                                    <li><Link to="/WorkElectric">Работа электрического тока</Link></li>
                                    <li><Link to="/ElectricPower">Мощность электрического тока</Link></li>

                                </ul>
                            </li>

                            <li>

                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="right">
                    <Layout/>
                </div>
            </div>
            </div>
        );

};

export default Center;