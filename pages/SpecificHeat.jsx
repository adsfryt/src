import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const SpecificHeat = () => {
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
    var name = "SpecificHeat";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Теплота. Удельная теплоёмкость</h1>
            <div className="centercontent">
                <p className="utitletxt">Теплота</p>
                <p className="txt">Вам уже известно, что внутренняя энергия тела может изменяться как путём совершения работы, так и путём теплопередачи.
                    Если изменение внутренней энергии происходит путём теплопередачи, то переход энергии от одних тел к другим осуществляется <mark className="mrk">теплопроводностью</mark>, <mark className="mrk">конвекцией</mark> или <mark className="mrk">излучением</mark>.</p>
                <p className="txtb">Энергия, которую получает или теряет тело при теплопередаче, называется количеством теплоты.</p>
                <p className="txtb">Чем больше масса тела, тем большее количество теплоты надо затратить, чтобы изменить его температуру на одно и то же число градусов.</p>
                <p className="txtb">При остывании тело передаёт окружающим предметам тем большее количество теплоты, чем больше его масса.
                </p>
                <p className="txt">Вам хорошо известно, что, если необходимо нагреть полный чайник (с водой) до температуры 50 °С,
                    потребуется меньше времени, чем для нагревания чайника с водой той же массы до 100 °С. В первом случае воде будет передано меньшее количество теплоты, чем во втором.</p>
                <p className="txtb">Это значит, что количество теплоты зависит от разности температур тела.</p>
                <p  className="txt">Также, количество теплоты, которое необходимо для нагревания тела, зависит от того, из какого вещества оно состоит, т. е. от рода вещества.</p>
                <p  className="txt">Количество теплоты обозначают буквой Q. Как и всякий другой вид энергии, количество теплоты измеряют в <mark className="mrk">джоулях</mark> (Дж).</p>
                <p className="txt">Однако измерять количество теплоты учёные стали задолго до того, как в физике появилось понятие энергии. Тогда была установлена особая единица для измерения количества теплоты — <mark className="mrk">калория</mark>.</p>
                <p className="txtb">Калория — это количество теплоты, которое необходимо для нагревания 1 г воды на 1°С.</p>
                <p className="txt"> 1 кал = 4,19 Дж ≈ 4,2 Дж.</p>
                <p className="utitletxt">Удельная теплоёмкость</p>

                <p className="txt">Нам известно, что для нагревания тел одинаковой массы, взятых при одинаковой температуре, на одну и ту же
                    величину требуется разное количество теплоты. Так, для нагревания 1 кг воды на 1 °С требуется количество теплоты, равное 4200 Дж.
                    Если нагревать 1 кг серебра на 1 °С, то потребуется 250 Дж.</p>
                <p className="txtb">Физическая величина, численно равная количеству теплоты, которое необходимо передать телу массой 1 кг для того, чтобы его температура изменилась на 1 °С, называется удельной теплоёмкостью вещества.</p>
                <p className="txt">Удельная теплоёмкость обозначается буквой с и измеряется в Дж/кг*°С</p>

                <div className="tab">
                    <div className="headd">
                        <div className="head">Вещество</div>
                        <div className="head1">Удельная теплота
                            парообразования  кДж/кг</div>
                    </div>
                    <div className="tai">
                        <div className="headt">Азот</div>
                        <div className="head1t">199</div>
                    </div>
                    <div className="tai">
                        <div className="headt">Ртуть</div>
                        <div className="head1t">282</div>
                    </div>
                    <div className="tai">
                        <div className="headt">Свинец</div>
                        <div className="head1t">855</div>
                    </div>
                    <div className="tai">
                        <div className="headt">Аммиак</div>
                        <div className="head1t">1370</div>
                    </div>
                    <div className="tai">
                        <div className="headt">Вода</div>
                        <div className="head1t">2300</div>
                    </div>
                    <div className="tai">
                        <div className="headt">Медь</div>
                        <div className="head1t">4820</div>
                    </div>


                    <div className="tai">
                        <div className="headt">Железо</div>
                        <div className="head1t">6120</div>
                    </div>
                    <div className="tai">
                        <div className="headt">Алюминий</div>
                        <div className="head1t">10900</div>
                    </div>
                    <div className="tai">
                        <div className="headt">Литий</div>
                        <div className="head1t">21000</div>
                    </div>
                    <div className="tai">
                        <div className="headt">Графит</div>
                        <div className="head1t">29700</div>
                    </div>
                    <div className="tai">
                        <div className="headt">Бор</div>
                        <div className="head1t">45300</div>
                    </div>
                </div>
                <p className="txt">Следует помнить, что удельная теплоёмкость вещества, находящегося в различных агрегатных состояниях, различна.
                </p>
                <p className="txt">Например, ртуть в жидком состоянии имеет удельную теплоёмкость, равную 138 , а в твёрдом состоянии — 129  (при -120 °С).</p>
            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default SpecificHeat;