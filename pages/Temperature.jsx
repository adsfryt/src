import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";

const Temperature = () => {
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
    var name = "Temperature";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }

    useEffect(() => {
        var path1 = anime.path('#svgdivin path');
        anime({
            targets: '#svgdivin .el1',
            translateX: path1('x'),
            translateY: path1('y'),
            rotate: path1('angle'),
            easing: 'linear',
            duration: 10000,
            loop: true
        });

    });

    return (
        <div className="qw">
            <h1 className="titletxt">Температура</h1>
            <div className="centercontent">
                <p className="txt">В окружающем нас мире происходят различные физические явления, которые связаны с нагреванием и
                    охлаждением тел. Мы знаем, что при нагревании холодная вода вначале становится тёплой, а затем горячей.</p>
                <p className="txt">Такими словами, как «холодный», «тёплый» и «горячий», мы указываем на различную
                    степень нагретости тел, или, как говорят в физике, на различную <mark className="mrk">температуру</mark> тел.</p>

                <p className="txt">Температуру тел измеряют с помощью термометра и выражают в <mark className="mrk">градусах Цельсия</mark> (°С).</p>
                <p className="txt">Вам уже известно, что диффузия при более высокой температуре происходит быстрее. Это означает,
                    что скорость движения молекул и температура связаны между собой. При повышении температуры скорость движения молекул
                    увеличивается, при понижении — уменьшается.
                </p>
                <p className="txtb">Следовательно, температура тела зависит от скорости движения молекул.</p>
                <p className="txt">Явления, связанные с нагреванием или охлаждением тел, с изменением <mark className="mrk">температуры</mark>, называются тепловыми.
                    К таким явлениям относятся, например, нагревание и охлаждение воздуха, таяние льда, плавление металлов и др.</p>
                <div className="svgdiv">
                    <div className="svgdivin" id="svgdivin">
                        <div className="el1 circle">

                        </div>
                        <svg className="svgim" viewBox="0 0 386.5 395.66">
                            <path className="be908176-a08a-41ce-99fd-3bf7bcdcc6b0"
                                  d="M252.7,276.1,215.35,453.32l-96.2-120.26,205.07,36.71L273.58,483.06l141.14-57L306,327.37l76.44-122.15,101.9,37.34,17.72,96.2S413.46,366,410.92,366s-84.17-110.75-84.17-110.75l7.59-107.6L249.53,91.29l10.13,84.81-91.14,12.66"
                                  transform="translate(-116.71 -89.26)"/>
                        </svg>
                    </div>
                    <p className="txtbn">Траектория движения молекуы</p>
                </div>
                <p  className="txt">Поскольку со скоростью движения молекул тела связана его температура, беспорядочное движение частиц называют <mark className="mrk">тепловым движением</mark>.</p>
                <p  className="txt">В жидкостях молекулы могут колебаться, вращаться и перемещаться относительно друг друга. В твёрдых телах молекулы и атомы колеблются около некоторых средних положений.</p>

          </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default Temperature;